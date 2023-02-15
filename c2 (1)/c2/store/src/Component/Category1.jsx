import React, { useEffect, useState } from "react";
import { getAllProductByCategory } from "../firebase_handlers/handleGetProduct";
import Card from "./Card";
import "./Category1.css";
function Category1() {
  const [objData, setObjData] = useState([]);
  useEffect(() => {
    const data = getAllProductByCategory(null, { category: "category1" });
    data.then((obj) => {
      setObjData([...obj]);
    });
  }, []);
  return (
    <div className="card-container">
      {objData.map((item, index) => {
        return (
          <div key={index}>
            <Card data={item} />
          </div>
        );
      })}
    </div>
  );
}

export default Category1;
