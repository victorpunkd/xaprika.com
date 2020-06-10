import React from "react";
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Amul Butter",
      brand: "Amul",
      price: 48,
      picture:
        "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/productImages/amul-butter.jpg",
    },
    {
      id: 2,
      name: "Good Day Nuts Cookies Biscuits",
      brand: "Britannia",
      price: 30,
      picture:
        "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/productImages/biscuit.jpg",
    },
  ];
  return (
    <div className="productListContainer">
      <div className="w3-row">
        {products.map((data) => (
          <div className="s12 w3-col productContainer">
            <ProductCard
              key={data.id}
              name={data.name}
              brand={data.brand}
              price={data.price}
              picture={data.picture}
              id={data.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
