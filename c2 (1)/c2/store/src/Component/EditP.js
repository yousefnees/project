import React, { useState, useEffect } from "react";
import "./AddProdect.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { updateDocRef } from "../firebase_handlers/handleUpdateItem";
import { getProduct } from "../firebase_handlers/handleGetProduct";
function EditP() {
  const [productName, setProductName] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [CategoryName, setCategoreyName] = useState("");
  const [inventory, setIsInventory] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const data = getProduct(null, { id: "HbHKzPexr2zi6QMiNByY" });
    data.then((dataObj) => {
      setProductName(dataObj.data().name);
      setUrlImage(dataObj.data().imgUrl);
      setCategoreyName(dataObj.data().category);
      setIsInventory(dataObj.data().inventory);
      setPrice(dataObj.data().price);
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
          updateDocRef("HbHKzPexr2zi6QMiNByY", data);

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
}

export default EditP;
