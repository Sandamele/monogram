import React from "react";
import { ProductDetails } from "./productDetails";
import { ProductImages } from "./productImages";

export default function ProductCard({
  productName,
  shortProductDescription,
  productPrice,
  productImage1,
  productImage2=null,
  preOrder = false,
}) {
  return (
    <div className="productCard">
      <ProductImages productName={productName} productImage1={productImage1} productImage2={productImage2} preOrder={preOrder} />
      <ProductDetails productName={productName} shortProductDescription={shortProductDescription} productPrice={productPrice} />
    </div>
  );
}
