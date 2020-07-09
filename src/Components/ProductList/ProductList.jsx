import React from "react";
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = (props) => {
  return (
    <div className="productListContainer">
      <div className="w3-row">
        {props.products.map((data) => (
          <div className="s12 w3-col productContainer">
            <ProductCard
              key={data.product_id}
              name={data.product_name}
              brand={data.product_brand}
              price={data.product_mrp}
              picture={data.product_image}
              id={data.product_id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
