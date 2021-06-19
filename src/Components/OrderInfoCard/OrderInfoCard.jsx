import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  cancelOrderAction,
  clearCancelOrderAction,
} from "../../Actions/CancelOrder";
import { fetchOrdersInfo } from "../../Actions/FetchOrdersInfo";
import { showAlertMessage } from "../../Actions/AlertMessageAction";
import "./OrderInfoCard.css";

const OrderInfoCard = (props) => {
  const dispatched = useDispatch();
  const { cancelOrderReducer } = useSelector((state) => state);

  const [isCancelButtonLoadingState, setIsCancelButtonLoadingState] =
    useState(false);

  const history = useHistory();
  const handleOrderShowDetailsClick = () => {
    history.push(`/OrderDetails/${props.orderId}`);
  };

  const handleCancelOrderClick = () => {
    if (isCancelButtonLoadingState) {
      return;
    }
    dispatched(
      cancelOrderAction(props.orderId, localStorage.getItem("userPhoneNo"))
    );
    setIsCancelButtonLoadingState(true);
  };

  useEffect(() => {
    if (cancelOrderReducer.isLoaded) {
      setIsCancelButtonLoadingState(false);
      if (cancelOrderReducer.error) {
        dispatched(
          showAlertMessage(
            "Something went wrong, please refresh the page and try again"
          )
        );
        return;
      }
      if (cancelOrderReducer.data) {
        if (cancelOrderReducer.data.code === 1) {
          dispatched(showAlertMessage("Your order is successfully cancelled"));
          dispatched(clearCancelOrderAction());
          dispatched(fetchOrdersInfo(localStorage.getItem("userPhoneNo")));
        } else {
          dispatched(
            showAlertMessage(
              "Something went wrong, please refresh the page and try again"
            )
          );
        }
      }
    }
  }, [cancelOrderReducer, dispatched]);

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
      <div className="orderControls">
        <div className="w3-row">
          <div className="s6 w3-col" style={{ paddingRight: 5 }}>
            <a
              className="secondaryButton w3-block"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/919883509323?text=Hi I need help with my order. Order ID - ${props.orderId}`}
            >
              Need Help ?
            </a>
          </div>
          <div className="s6 w3-col" style={{ paddingLeft: 5 }}>
            <button
              disabled={props.orderStatus === "Order Received" ? false : true}
              className={`secondaryButton w3-block w3-text-red ${
                (props.orderStatus !== "Order Received" ||
                  isCancelButtonLoadingState) &&
                "disabledSecondaryButton"
              }`}
              onClick={handleCancelOrderClick}
            >
              {isCancelButtonLoadingState
                ? "Cancelling Order ..."
                : "Cancel Order"}
            </button>
          </div>
        </div>
      </div>
      <button
        className="primaryButton w3-block"
        onClick={handleOrderShowDetailsClick}
        style={{ marginTop: 15 }}
      >
        Show Details
      </button>
    </div>
  );
};

export default OrderInfoCard;
