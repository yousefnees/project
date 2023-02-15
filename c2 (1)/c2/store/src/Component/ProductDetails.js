import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {product.name}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
