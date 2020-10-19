import React from "react";
//import { useHistory } from "react-router-dom";
import "./OrderInfoCard.css";

const OrderInfoCard = (props) => {
  //const history = useHistory();
  // const handleOrderShowDetailsClick = () => {
  //   history.push(`/OrderDetails/${props.orderId}`);
  // };
  return (
    <div className="orderHistoryCard w3-card">
      <div className="w3-row orderInfoItem">
        <div className="s6 w3-col infoType">Order ID -</div>
        <div className="s6 w3-col actualInfo">{props.orderId}</div>
      </div>
      <div className="w3-row orderInfoItem">
        <div className="s6 w3-col infoType">Amount -</div>
        <div className="s6 w3-col actualInfo">Rs. {props.amount}</div>
      </div>
      <div className="w3-row orderInfoItem">
        <div className="s6 w3-col infoType">Order Date -</div>
        <div className="s6 w3-col actualInfo">{props.orderDate}</div>
      </div>
      <div className="w3-row orderInfoItem">
        <div className="s6 w3-col infoType">Order Status -</div>
        <div className="s6 w3-col actualInfo">{props.orderStatus}</div>
      </div>
      {/*<button
        className="primaryButton w3-block"
        onClick={handleOrderShowDetailsClick}
        style={{ marginTop: 15 }}
      >
        Show Details
      </button>*/}
    </div>
  );
};

export default OrderInfoCard;
