import React from "react";

export const ProductDetails = ({
  productName,
  shortProductDescription,
  productPrice,
}) => {
  return (
    <div className="productDetails">
      <div className="d-flex justify-content-between">
        <label className="productName">{productName}</label>
        <label className="priceProduct">${productPrice}</label>
        <button className="shopNowBtn" >Shop now</button>
      </div>
      {shortProductDescription && (
        <p className="shortDescription">{shortProductDescription}</p>
      )}
    </div>
  );
};
