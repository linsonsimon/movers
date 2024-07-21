import { useState } from "react";
import "./Room.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import RoomItems from "./RoomItems/RoomItems";

const Room = ({ header, data }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="room-hero">
      <div
        onClick={() => setIsActive((prev) => !prev)}
        className={`room-hero-head ${isActive ? "" : "br-rad"}`}
      >
        <div className="head-details">{header}</div>
        <button>{isActive ? <FaChevronUp /> : <FaChevronDown />}</button>
      </div>
      {isActive && <RoomItems data={data} />}
    </div>
  );
};

export default Room;
