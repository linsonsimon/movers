import axios from "axios";
import React, { useEffect, useState } from "react";
import Moves from "../components/Moves";

const MyMoves = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let a = await axios
      .get("http://test.api.boxigo.in/sample-data/")
      .then((response) => {
        return response.data.Customer_Estimate_Flow;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setDatas([a[0]]);
    console.log(a[0]);
  }
  return (
    <div>
      <h1>MyMoves</h1>
      {datas?.map((data) => (
        <Moves data={data} key={data.estimate_id} />
      ))}
    </div>
  );
};

export default MyMoves;
