import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { Link } from "react-router-dom";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import ProductList from "../ProductList/ProductList";
import {
  fetchProductsUnderCart,
  clearFetchProductsUnderCart,
} from "../../Actions/FetchProductsUnderCart";

const Cart = () => {
  const dispatched = useDispatch();
  const { productsUnderCart, cartData } = useSelector((state) => state);

  const [
    isOutOfStockProductInTheCartState,
    setIsOutOfStockProductInTheCartState,
  ] = useState(false);

  useEffect(() => {
    dispatched(clearFetchProductsUnderCart());
    if (!cartData.length) {
      dispatched(fetchProductsUnderCart([0, 0]));
    }
    dispatched(fetchProductsUnderCart(cartData));
  }, [cartData, dispatched]);

  useEffect(() => {
    if (productsUnderCart.data.length) {
      productsUnderCart.data.forEach((element) => {
        if (!element.in_stock) {
          setIsOutOfStockProductInTheCartState(true);
          return;
        }
        setIsOutOfStockProductInTheCartState(false);
      });
    }
  }, [productsUnderCart]);

  let getTotalAmount = (productsUnderCart) => {
    let totalAmount = 0;
    if (
      productsUnderCart.error ||
      !productsUnderCart.isLoaded ||
      !productsUnderCart.data.length
    )
      return totalAmount;
    productsUnderCart.data.forEach((data) => {
      if (data.in_stock)
        totalAmount +=
          data.product_sale_price *
          getDuplicateCount(cartData, data.product_id);
    });
    // if (outOfStockFlag) setIsOutOfStockProductInTheCartState(true);
    // else setIsOutOfStockProductInTheCartState(false);
    return totalAmount;
  };

  let getDuplicateCount = (array, element) => {
    let i = array.length;
    let totalCount = 0;
    while (i) {
      if (array[i - 1] === element) totalCount++;
      i--;
    }
    return totalCount;
  };

  return (
    <div className="cartContainer w3-animate-opacity">
      <CurrentPageNameHeader categoryName="Cart" />
      {isOutOfStockProductInTheCartState && (
        <div className="outOfStockProductAlert">
          You have out of stock items in your cart. Please remove those to place
          an order
        </div>
      )}
      <div className="productsListInCart">
        <ProductList products={productsUnderCart} currentActivePage="cart" />
      </div>
      <div className="cartFooter w3-card w3-row">
        <div className="s9 w3-col totalAmountInCart">
          <div className="totalAmountText">
            Total Amount -{" "}
            <span className="cartAmount">
              Rs. {getTotalAmount(productsUnderCart)}
            </span>
          </div>
        </div>
        <div className="s3 w3-col">
          <Link to="/Checkout">
            <button
              disabled={
                getTotalAmount(productsUnderCart) <= 0
                  ? true
                  : isOutOfStockProductInTheCartState
                  ? true
                  : false
              }
              className={`primaryButton ${
                getTotalAmount(productsUnderCart) <= 0
                  ? "disabledButton"
                  : isOutOfStockProductInTheCartState
                  ? "disabledButton"
                  : ""
              }`}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
