import React, { useState, useEffect } from "react";
import "./AddProdect.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { getProduct } from "../firebase_handlers/handleGetProduct";
import { updateDocRef } from "../firebase_handlers/handleUpdateItem";
function UpdateProduct() {
  const location = useLocation();

  const [productName, setProductName] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [CategoryName, setCategoreyName] = useState("");
  const [inventory, setIsInventory] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    console.log(location.state.id);
    const data = getProduct(null, { id: location.state.id });
    data.then((obj) => {
      //   setObjData([...obj]);
      setCategoreyName(obj.data().category);
      setUrlImage(obj.data().imgUrl);
      setIsInventory(obj.data().inventory);
      setProductName(obj.data().name);
      setPrice(obj.data().price);
    });
  }, []);
  return (
    <div className="addproduct">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const data = {
            name: productName,
            imgUrl: urlImage,
            category: CategoryName,
            price: price,
            inventory: inventory,
          };
          updateDocRef(location.state.id, data);
          //   addProduct(e, data);
          //   setPrice("");
          //   setProductName("");
          //   setUrlImage("");
          //   setIsInventory("");
          //   setCategoreyName("");
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image name</Form.Label>
          <Form.Control
            value={urlImage}
            onChange={(e) => {
              setUrlImage(e.target.value);
            }}
            type="text"
            placeholder="Enter Url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category name</Form.Label>
          <Form.Control
            value={CategoryName}
            onChange={(e) => {
              setCategoreyName(e.target.value);
            }}
            type="text"
            placeholder="Enter Category"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>inventory name</Form.Label>
          <Form.Control
            value={inventory}
            onChange={(e) => {
              setIsInventory(e.target.value);
            }}
            type="text"
            placeholder="Enter Category"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="text"
            placeholder="Enter Price"
          />
        </Form.Group>
        <Button
          disabled={
            !productName || !urlImage || !CategoryName || !inventory || !price
          }
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UpdateProduct;
