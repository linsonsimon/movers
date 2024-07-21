import "./RequestComp.css";
import { IoMdHome } from "react-icons/io";
import { BsLuggageFill, BsCalendar2DateFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { FaRoute, FaExclamationTriangle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import ViewMoveDetails from "../ViewMoveDetails/ViewMoveDetails";

const RequestComp = ({ data }) => {
  const [isViewDetailsActive, setIsViewDetailsActive] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsViewDetailsActive((prev) => !prev);
  };

  return (
    <div className="req-comp-hero">
      <div className="from-to-req">
        <div className="req-ft">
          <h4>From</h4>
          <p>{data?.moving_from}</p>
        </div>

        <div className="arrow-div">
          <button
            className="arrow-btn"
            style={{
              padding: "0.6rem",
              border: "none",
              borderRadius: "50%",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <FaArrowRightLong />
          </button>
        </div>
        <div className="req-ft">
          <h4>To</h4>
          <p>{data?.moving_to}</p>
        </div>
        <div className="req-request">
          <h4>Request#</h4>
          <p>{data?.estimate_id}</p>
        </div>
      </div>
      <div className="req-details">
        <div className="req-details-info">
          <p>
            <span>
              <IoMdHome />
            </span>
            1 BHK
          </p>
          <p>
            <span>
              <BsLuggageFill />
            </span>
            32
          </p>
          <p>
            <span>
              <FaRoute />
            </span>
            4.8 Km
          </p>
          <p>
            <span>
              <BsCalendar2DateFill />
            </span>
            Sep 26,2020 at 6:18PM
            <button className="edit">
              <MdModeEdit />
            </button>
          </p>
          <div className="flexible">
            <input type="checkbox" />
            <p>isFlexible</p>
          </div>
        </div>
        <div className="req-details-btns">
          <button className="details-btn" onClick={handleClick}>
            View move details
          </button>
          <button className="quotes-btn">Quotes Awaiting</button>
        </div>
      </div>
      <p className="disclaimer">
        <span>
          <FaExclamationTriangle />
          <span style={{ color: "black" }}>Disclaimer:</span>
        </span>
        Please update your move dates before two days of shifting
      </p>
      {isViewDetailsActive && (
        <ViewMoveDetails active={isViewDetailsActive} data={data} />
      )}
      <hr />
    </div>
  );
};

export default RequestComp;
