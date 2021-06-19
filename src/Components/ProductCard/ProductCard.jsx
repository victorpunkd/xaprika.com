import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductCard.css";
import { showAlertMessage } from "../../Actions/AlertMessageAction";
import {
  addProductToCart,
  removeProductFromCart,
  removeAllTheOccurencesOfAProductFromCart,
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
    if (!props.inStock) return;
    if (getDuplicateCount(cartData, props.id) > 9) {
      dispatched(
        showAlertMessage("You can add a maximum of 10 units per ptoduct")
      );
      return;
    }
    dispatched(addProductToCart(props.id));
  };

  const handleProductRemoveClick = () => {
    if (!props.inStock) return;
    dispatched(removeProductFromCart(props.id));
  };

  const handleDeleteProductFromCart = () => {
    dispatched(removeAllTheOccurencesOfAProductFromCart(props.id));
  };

  return (
    <div className="productCardContainer w3-card w3-row">
      <div className="productInfoContainer">
        <div className="s3 w3-col productImageContainer">
          {!props.inStock && (
            <div className="outOfStockContainer">Out of stock</div>
          )}
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
          <div className="productPrice">
            {props.currentActivePage === "orderDetails"
              ? props.selling_price + " X " + props.product_count
              : !props.inStock
              ? ""
              : "Rs. " + props.price}
          </div>
        </div>
        <div
          className={`s3 w3-col productControls ${
            !props.inStock && "outOfStockControl"
          }`}
        >
          <div className="totalPrice">
            {props.currentActivePage === "orderDetails"
              ? props.consolidated_price
              : !props.inStock
              ? ""
              : "Rs. " + getDuplicateCount(cartData, props.id) * props.price}
          </div>
          {props.currentActivePage !== "orderDetails" && (
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
          )}
        </div>
        {props.currentActivePage === "cart" && (
          <div>
            <i
              className="fa fa-trash"
              style={{
                color: "#c72c41",
                fontSize: 20,
                marginLeft: 49,
                marginTop: 5,
                cursor: "pointer",
              }}
              onClick={handleDeleteProductFromCart}
              aria-hidden="true"
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
