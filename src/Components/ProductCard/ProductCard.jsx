import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  const handleProductAddClick = () => {
    alert("added");
  };
  const handleProductRemoveClick = () => {
    alert("removesd");
  };
  return (
    <div className="productCardContainer w3-card w3-row">
      <div className="productInfoContainer">
        <div className="s3 w3-col productImageContainer">
          <img
            src={props.picture}
            alt={`xaprika-product-${props.name}`}
            className="productImage"
          />
        </div>
        <div className="s6 w3-col productInfo">
          <div className="productBrand">{props.brand}</div>
          <div className="productName">{props.name}</div>
          <div className="productPrice">Price RS : {props.price}</div>
        </div>
        <div className="s3 w3-col productControls">
          <div className="totalPrice">0</div>
          <div className="controlButtons w3-row">
            <button
              onClick={handleProductRemoveClick}
              className="addSubtractButton s4 w3-col"
            >
              -
            </button>
            <div
              className="s4 w3-col"
              style={{ textAlign: "center", color: "#148ea4" }}
            >
              0
            </div>
            <button
              onClick={handleProductAddClick}
              className="addSubtractButton s4 w3-col"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
