import React, { lazy, Suspense } from "react";
import "./style.scss";
const TopPage = lazy(() => import("./topPage"));
const ProductListing = lazy(() => import("./productListing"));
export default function Shop() {
  return (
    <div className="products">
      <div className="heroPage">
        <div className="heroPageText">
          <h1>A console for every workflow</h1>
          <p>Discover the perfect console for yours</p>
        </div>
      </div>
      <div className="row __container topPageProduct">
        <Suspense fallback={<div>Loading...</div>}>
          <TopPage />
        </Suspense>
      </div>
      <div className="row __container">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductListing />
        </Suspense>
      </div>
    </div>
  );
}
