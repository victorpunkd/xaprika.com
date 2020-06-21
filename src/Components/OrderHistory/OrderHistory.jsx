import React from "react";
import "./OrderHistory.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";

const OrderHistory = () => {
  return (
    <div className="orderHistoryContainer">
      <CurrentPageNameHeader categoryName="Order History" />
      <div className="orderHistoryBody">
        <div className="orderHistoryCard w3-card">
          <div className="w3-row orderInfoItem">
            <div className="s6 w3-col infoType">Order ID -</div>
            <div className="s6 w3-col actualInfo">100001</div>
          </div>
          <div className="w3-row orderInfoItem">
            <div className="s6 w3-col infoType">Amount -</div>
            <div className="s6 w3-col actualInfo">460 INR</div>
          </div>
          <div className="w3-row orderInfoItem">
            <div className="s6 w3-col infoType">Order Date -</div>
            <div className="s6 w3-col actualInfo">05/05/2020</div>
          </div>
          <div className="w3-row orderInfoItem">
            <div className="s6 w3-col infoType">Order Status -</div>
            <div className="s6 w3-col actualInfo">Completed</div>
          </div>
          <button className="primaryButton w3-block" style={{ marginTop: 15 }}>
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
