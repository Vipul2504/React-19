import React from "react";
import { Link, Links, useParams } from "react-router-dom";

const ProductDetails = () => {
  const param = useParams();
  return (
    <>
      <h1>Product Details</h1>
      <div>{param.productId}</div>
      <p>
        <Link to="" relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetails;
