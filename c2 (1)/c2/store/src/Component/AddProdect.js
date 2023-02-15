import React, { useState } from "react";
import "./AddProdect.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addProduct } from "../firebase_handlers/handlesubmit";

const AddProdect = () => {
  const [productName, setProductName] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [CategoryName, setCategoreyName] = useState("");
  const [inventory, setIsInventory] = useState("");
  const [price, setPrice] = useState("");

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
          addProduct(e, data);
          setPrice("");
          setProductName("");
          setUrlImage("");
          setIsInventory("");
          setCategoreyName("");
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
};

export default AddProdect;
