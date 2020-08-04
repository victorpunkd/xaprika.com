import React from "react";
import { Link } from "react-router-dom";
import "./OrderConfirmed.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";

const OrderConfirmed = () => {
  return (
    <div className="orderConfirmedContainer">
      <CurrentPageNameHeader categoryName="Order Confirm" />
      <div className="orderConfirmedData">
        <img
          src="https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/alertImages/order_confirmed.jpg"
          alt="xaprika order confirmed"
          className="orderConfirmImage"
        />
        <div>
          <img
            src="https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/alertImages/check-circle-animated.gif"
            alt="checked"
          />
          <div className="highlitedText">Your order is confirmed</div>
          <div>
            Order Number - <span className="highlitedText">1029746</span>
          </div>
          <div>
            Amount To be Paid - <span className="highlitedText">340 INR</span>
          </div>
          <Link to="/OrderHistory">
            <button className="linkButton">Track Your Orders</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
