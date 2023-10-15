import React from "react";
import useFetchData from "../../hooks/useFetchData";
import ProductCard from "./productCard";

export default function TopPage() {
  const {
    data: topPageProdcut,
    loading: topPageProdcutLoading,
    error: topPageProdcutError,
  } = useFetchData("product", "topPage=true");
  return (
    <>
      {!topPageProdcutLoading ? (
        topPageProdcut.map((product) => (
          <div className="col-md-6" key={product.id}>
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
