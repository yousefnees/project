import React, { useEffect, useState } from "react";
import { getAllProduct } from "../firebase_handlers/handleGetProduct";
import Card from "./Card";
function SeeAllProduct() {
  const [objData, setObjData] = useState([]);
  useEffect(() => {
    const data = getAllProduct();
    data.then((obj) => {
      setObjData([...obj]);
    });
  }, []);
  return (
    <div className="card-container">
      {objData.map((item, index) => {
        return (
          <div className="product-card" key={index}>
            <Card data={item} />
          </div>
        );
      })}
    </div>
  );
}

export default SeeAllProduct;
