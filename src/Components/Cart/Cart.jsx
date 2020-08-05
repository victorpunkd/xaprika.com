import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { Link } from "react-router-dom";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import ProductList from "../ProductList/ProductList";
import { fetchProductsUnderCart } from "../../Actions/FetchProductsUnderCart";
import { clearFetchProductsUnderCart } from "../../Actions/FetchProductsUnderCart";

const Cart = () => {
  const dispatched = useDispatch();
  const { productsUnderCart, cartData } = useSelector((state) => state);
  useEffect(() => {
    dispatched(clearFetchProductsUnderCart());
    if (!cartData.length) {
      dispatched(fetchProductsUnderCart([0, 0]));
    }
    dispatched(fetchProductsUnderCart(cartData));
  }, [cartData, dispatched]);
  let getTotalAmount = (productsUnderCart) => {
    let totalAmount = 0;
    if (
      productsUnderCart.error ||
      !productsUnderCart.isLoaded ||
      !productsUnderCart.data.length
    )
      return totalAmount;
    productsUnderCart.data.forEach(
      (data) =>
        (totalAmount +=
          data.product_mrp * getDuplicateCount(cartData, data.product_id))
    );
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
      <div>
        <ProductList products={productsUnderCart} />
      </div>
      <div className="cartFooter w3-card w3-row">
        <div className="s9 w3-col totalAmountInCart">
          <div className="totalAmountText">
            Total Amount -{" "}
            <span className="cartAmount">
              {getTotalAmount(productsUnderCart)}
            </span>
          </div>
        </div>
        <div className="s3 w3-col">
          <Link to="/Checkout">
            <button
              disabled={getTotalAmount(productsUnderCart) <= 0 ? true : false}
              className={`primaryButton ${
                getTotalAmount(productsUnderCart) <= 0 && "disabledButton"
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
