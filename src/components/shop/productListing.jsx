import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import ProductCard from "./productCard";

export default function ProductListing() {
  const [productListing, setProductListing] = useState([]);
  const [productListingLoading, setProductListingLoading] = useState(true);
  useEffect(() => {
    fetchData("product", "topPage=false").then((data) => {
      setProductListing(data);
      setProductListingLoading(false);
    });
  }, []);
  return (
    <>
      {!productListingLoading ? (
        productListing.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductCard
              productName={product.name}
              productPrice={product.price}
              productImage1={`${import.meta.env.VITE_CMS}/api/files/${
                product.collectionId
              }/${product.id}/${product.productImage1}`}
              productImage2={`${import.meta.env.VITE_CMS}/api/files/${
                product.collectionId
              }/${product.id}/${product.productImage2}`}
              shortProductDescription={product.shortDescription}
              preOrder={product.preOrder}
            />
          </div>
        ))
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
