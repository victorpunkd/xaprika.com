import React from "react";
import { useEffect } from "react";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import "./OrderDetails.css";

const OrderDetails = ({ match }) => {
  useEffect(() => {
    console.log(match.params.odrerNo);
  });

  return (
    <div className="orderDetailsContainer">
      <CurrentPageNameHeader categoryName="Order Details" />
      <div className="orderDetailsBody">hi</div>
    </div>
  );
};

export default OrderDetails;
