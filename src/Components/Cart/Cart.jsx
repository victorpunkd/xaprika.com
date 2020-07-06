import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import ProductList from "../ProductList/ProductList";

const Cart = () => {
  return (
    <div className="cartContainer w3-animate-opacity">
      <CurrentPageNameHeader categoryName="Cart" />
      <div>
        <ProductList />
      </div>
      <div className="cartFooter w3-card w3-row">
        <div className="s9 w3-col totalAmountInCart">
          <div className="totalAmountText">
            Total Amount - <span className="cartAmount">290</span>
          </div>
        </div>
        <div className="s3 w3-col">
          <Link to="/Checkout">
            <button className="primaryButton">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
