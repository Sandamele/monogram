import React from "react";
import { isNull } from "lodash";

export const ProductImages = ({ productImage1, productImage2, productName, preOrder }) => {
  return (
    <div>
      <div
        className={`${
          isNull(productImage2) ? "productImage" : "productImages"
        }`}
      >
        <div>
          <img
            src={productImage1}
            alt={productName}
            className="productImage1"
          />
          
        </div>
        {!isNull(productImage2) && (
          <div>
            <img
              src={productImage2}
              alt={productName}
              className="productImage2"
            />
          </div>
        )}
      </div>
      {preOrder && <label className="preOrder">Pre-Order</label>}
    </div>
  );
};
