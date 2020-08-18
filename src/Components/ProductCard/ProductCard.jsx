import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductCard.css";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../Actions/CartAddRemoveProductAction";

const ProductCard = (props) => {
  const { cartData } = useSelector((state) => state);

  const getDuplicateCount = (array, element) => {
    let i = array.length;
    let totalCount = 0;
    while (i) {
      if (array[i - 1] === element) totalCount++;
      i--;
    }
    return totalCount;
  };
  const dispatched = useDispatch();

  const handleProductAddClick = () => {
    dispatched(addProductToCart(props.id));
  };

  const handleProductRemoveClick = () => {
    dispatched(removeProductFromCart(props.id));
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
          <div className="productQuantity">
            {props.productQuantity}{" "}
            <span className="productQuantityUnit">
              {props.productQuantityUnit}
            </span>
          </div>
          <div className="productPrice">Rs. {props.price}</div>
        </div>
        <div className="s3 w3-col productControls">
          <div className="totalPrice">
            Rs. {getDuplicateCount(cartData, props.id) * props.price}
          </div>
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
              {getDuplicateCount(cartData, props.id)}
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
