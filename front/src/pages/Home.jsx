import React from "react";
import Product from "../components/Product.jsx";

export default function Home() {
  return (
    <div className="content">
      <div className="banner">
        <h3>Shop With US</h3>
        <p>Best Products, High Quality</p>
      </div>
      <div>
        <Product />
      </div>
    </div>
  );
}
