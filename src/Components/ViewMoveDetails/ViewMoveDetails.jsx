import { useState, useEffect } from "react";
import "./ViewMoveDetails.css";
import Room from "./Room/Room";
const ViewMoveDetails = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const [stuff, setStuff] = useState({
    lr: { title: "Living Room", data: {} },
    br: { title: "Bed Room", data: {} },
    k: { title: "Kitchen", data: {} },
    b: { title: "BathRoom", data: {} },
  });
  useEffect(() => {
    let furniture = filterFurniture();
    let electricals = filterElectrials();
    let fragile = filterFragile();

    let a = {
      data: {
        Furniture: furniture,
        Electricals: electricals,
        Fragile: fragile,
      },
    };

    let totalCount = Object.values(a.data).reduce((total, category) => {
      const categorySum = category.items.reduce(
        (sum, item) => sum + item.qty,
        0
      );
      return total + categorySum;
    }, 0);
    setStuff((prev) => ({
      ...prev,
      lr: { ...prev.lr, data: a.data, totalCount: totalCount },
    }));
  }, []);

  const filterFurniture = () => {
    let a = data.items.inventory[0].category
      .filter(
        (furniture) =>
          furniture.id !== "1_4" &&
          furniture.id !== "1_5" &&
          furniture.id !== "1_6"
      )
      .map((furniture) => furniture.items.filter((item) => item.qty != 0))
      .filter((filteredItems) => filteredItems.length > 0) // Ensure we only flatten non-empty arrays
      .flat();

    let count = a.reduce((acc, item) => acc + item.qty, 0);
    let temp = {
      items: a,
      count: count,
    };
    return temp;
  };

  const filterElectrials = () => {
    let a = data.items.inventory[1].category
      .map((electricals) => electricals.items.filter((item) => item.qty != 0))
      .filter((filteredItems) => filteredItems.length > 0) // Ensure we only flatten non-empty arrays
      .flat();

    let count = a.reduce((acc, item) => acc + item.qty, 0);
    let temp = {
      items: a,
      count: count,
    };

    return temp;
  };
  const filterFragile = () => {
    let a = data.items.inventory[3].category[2].items.filter(
      (item) => item.qty != 0
    );
    let count = a.reduce((acc, item) => acc + item.qty, 0);
    let temp = {
      items: a,
      count: count,
    };
    return temp;
  };

  useEffect(() => {
    setIsActive(true);
    console.log("view", data);
  }, []);

  const HouseDetailsInfo = ({ title, memo }) => (
    <div>
      <p style={{ fontWeight: "600", marginBottom: ".5rem" }}>{title}</p>
      <p>{memo}</p>
    </div>
  );
  return (
    <div className={`accordian-hero ${isActive ? "active" : ""}`}>
      <div className="inv-details">
        <div className="inv-details-head">
          <h3>Inventory Details</h3>
          <button>Edit Inventory</button>
        </div>
        <div className="rooms">
          {Object.entries(stuff).map(([key, value]) => (
            <Room
              header={
                <>
                  <h4>{value.title}</h4>
                  <p>{value.totalCount ? value.totalCount : 0}</p>
                </>
              }
              data={value.data}
            />
          ))}
        </div>
      </div>
      <div className="house-details">
        <div className="house-details-head">
          <h3>House Details</h3>
          <button>Edit house details</button>
        </div>
        <div className="house-details-section">
          <div className="existing-house-details">
            <h3>Existing House Details</h3>
            <div className="existing-house-info">
              <HouseDetailsInfo title="Floor No." memo={data.old_floor_no} />
              <HouseDetailsInfo
                title="Elevator Available"
                memo={data.old_elevator_availability}
              />
              <HouseDetailsInfo
                title="Packaging Required"
                memo={data.packing_service}
              />
              <HouseDetailsInfo
                title="Distance from truck to door"
                memo={data.old_parking_distance}
              />
              <HouseDetailsInfo
                title="Additional Information"
                memo="No Additional Info"
              />
            </div>
          </div>
          <div className="new-house-details">
            <h3>New House Details</h3>
            <div className="new-house-info">
              <HouseDetailsInfo title="Floor No." memo={data.new_floor_no} />
              <HouseDetailsInfo
                title="Elevator Available"
                memo={data.new_elevator_availability}
              />
              <HouseDetailsInfo
                title="Packaging Required"
                memo={data.packing_service}
              />
              <HouseDetailsInfo
                title="Distance from truck to door"
                memo={data.new_parking_distance}
              />
              <HouseDetailsInfo
                title="Additional Information"
                memo="No Additional Info"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMoveDetails;
