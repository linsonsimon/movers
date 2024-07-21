import { useEffect, useState } from "react";
import RequestComp from "../../Components/RequestComp/RequestComp";
import "./MyMoves.css";

import axios from "axios";

const MyMoves = () => {
  const [datas, setDatas] = useState([]);

  async function fetchData() {
    let a = await axios
      .get("http://test.api.boxigo.in/sample-data/")
      .then((response) => {
        return response.data.Customer_Estimate_Flow;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setDatas(a);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="my-moves-hero">
      <h1>My Moves</h1>
      {datas?.map((data) => (
        <RequestComp data={data} key={data.estimate_id} />
      ))}
    </div>
  );
};

export default MyMoves;
