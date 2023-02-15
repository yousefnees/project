import React, { useState } from "react";
import { ButtonGroup, Button, Card, CardGroup } from "react-bootstrap";
import { useRouteMatch, Link } from "react-router-dom";
import "./ProductPage.css";

const SquareButton = ({ image, title }) => {
  const buttonStyle = {
    width: "300px",
    height: "300px",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginRight: "10px",
    backgroundcolor: "balck",
  };

  return (
    <Button variant="light" style={buttonStyle}>
      {title}
    </Button>
  );
};
function handleCategorySelect(category) {
  console.log(`Selected category: ${category}`);
}
const ImageSquareButtons = () => {
  return (
    <div className="product__buttons">
      <Link to="/product1">
        <SquareButton
          image="/iphone-14-button-001-1662619279846.jpg"
          onClick={() => handleCategorySelect("Category 1")}
          title=""
          className="Button"
        />
      </Link>
      <Link to="/product2">
        <SquareButton
          image="/aw_ultra_web_006.webp"
          onClick={() => handleCategorySelect("Category 2")}
          title=""
          className="ButtonB"
        />
      </Link>
      <Link to="/product3">
        <SquareButton
          image="/airPods.png"
          onClick={() => handleCategorySelect("Category 3")}
          title=""
          className="ButtonC"
        />
      </Link>
    </div>
  );
};
export default ImageSquareButtons;
