import { useEffect, useState } from "react";
import "./RoomItems.css";
const RoomItems = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    // console.log(data);
    setIsActive(true);
  }, []);

  const DetailsHolder = ({ title, count, memo }) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "5rem",
            marginBottom: ".5rem",
            fontSize: ".8rem",
          }}
        >
          <p>{title}</p>
          <p>{count}</p>
        </div>
        <p style={{ fontWeight: "600", fontSize: ".7rem" }}>{memo}</p>
      </div>
    );
  };
  return (
    <div className={`room-items-hero ${isActive ? "active" : ""}`}>
      <div className="room-details">
        {Object.entries(data).map(
          ([key, value]) =>
            value.count > 0 && (
              <div className="furnitures" key={key}>
                <h3>{key}</h3>
                {value.items.map((item) => (
                  <DetailsHolder
                    title={item?.displayName}
                    count={item?.qty}
                    memo={item.type.map((type) => type.selected && type.option)}
                    key={item.id}
                  />
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default RoomItems;
