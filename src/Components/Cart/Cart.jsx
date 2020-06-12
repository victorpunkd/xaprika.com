import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import ProductList from "../ProductList/ProductList";

const Cart = () => {
  return (
    <div className="cartContainer">
      <CurrentPageNameHeader categoryName="Cart" />
      <div>
        <ProductList />
      </div>
      <div className="cartFooter w3-card w3-row">
        <div className="s9 w3-col totalAmount">
          <div className="totalAmountText">
            Total Amount - <spam className="cartAmount">290</spam>
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
