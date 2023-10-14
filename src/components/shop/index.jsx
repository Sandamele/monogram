import React from "react";
import ProductCard from "./productCard";
import "./style.scss";
import heroImage from "../../assets/pexels-pixabay-164745.jpg";
import useFetchData from "../../hooks/useFetchData";
import { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../../utils/fetchData";
export default function Shop() {
  const {
    data: topPageProdcut,
    loading: topPageProdcutLoading,
    error: topPageProdcutError,
  } = useFetchData("product", "topPage=true");
  const [productListing, setProductListing] = useState([]);
  const [productListingLoading,setProductListingLoading] = useState(true);
  useEffect(() => {
    fetchData('product','topPage=false').then((data)=> {
      setProductListing(data);
      setProductListingLoading(false);
    })
  },[])
  return (
    <div className="products">
      <div className="row __container topPageProduct">
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
      </div>
      <div className="row __container">
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
      </div>
    </div>
  );
}
