import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const param = useParams();
  return (
    <>
      <h1>Product Details</h1>
      <div>{param.productId}</div>;
    </>
  );
};

export default ProductDetails;
