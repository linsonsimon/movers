import React, { useEffect, useRef, useState } from "react";
// import Details from "./Details";
import "./Dropdown.css";
const Moves = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    console.log("hi");
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <>
      <div
        className="MovesHeading"
        style={{
          display: "grid",
          gridTemplateColumns: "35% 10% 35% 20%",
        }}
      >
        <div>
          <h3>From</h3>
          <p>{data.moving_from}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3>=&gt;</h3>
        </div>
        <div>
          <h3>To</h3>
          <p>{data.moving_to}</p>
        </div>
        <div>
          <h3>Request#</h3>
          <p>{data.estimate_id}</p>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <p>{data.property_size}</p>
          <p>{data.total_items}</p>
          <p>{data.distance}</p>
          <p>{data.moving_on}</p>
          <button style={{ height: "auto" }}>i</button>
          <p>
            <input type="checkbox" />
            isFlexible
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "5px",
            margin: "0 5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={toggleDropdown}>View Move Details</button>
          <button>Quotes Awaiting</button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <p>
          <span style={{ fontWeight: "bold" }}>Disclaimer:</span>Please update
          your move dates 2 days prior
        </p>
      </div>
      <div
        ref={contentRef}
        className={`dropdown-content ${isOpen ? "open" : "close"}`}
        style={{ height: `${height}px`, backgroundColor: "red" }}
      >
        <div>hello</div>
      </div>
    </>
  );
};

export default Moves;
