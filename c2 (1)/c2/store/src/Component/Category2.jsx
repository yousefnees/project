import React, { useEffect, useState } from "react";
import { getAllProductByCategory } from "../firebase_handlers/handleGetProduct";
import Card from "./Card";
function Category2() {
  const [objData, setObjData] = useState([]);
  useEffect(() => {
    const data = getAllProductByCategory(null, { category: "category2" });
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

export default Category2;
