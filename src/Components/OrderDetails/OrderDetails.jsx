import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import NoDataFound from "../NoDataFound/NoDataFound";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import ProductList from "../ProductList/ProductList";
import { showAlertMessage } from "../../Actions/AlertMessageAction";
import {
  fetchOrderDetailsAction,
  clearfetchOrderDetailsAction,
} from "../../Actions/FetchOrderDetails";
import { fetchOrdersInfo } from "../../Actions/FetchOrdersInfo";
import {
  cancelOrderAction,
  clearCancelOrderAction,
} from "../../Actions/CancelOrder";
import "./OrderDetails.css";

const OrderDetails = ({ match }) => {
  const dispatched = useDispatch();
  const { orderDetailsReducer, ordersInfoReducer, cancelOrderReducer } =
    useSelector((state) => state);

  const [currentOrderDetailsState, setCurrentOrderDetailsState] = useState([]);
  const [isCancelButtonLoadingState, setIsCancelButtonLoadingState] =
    useState(false);

  const handleCancelOrderClick = () => {
    if (isCancelButtonLoadingState) {
      return;
    }
    dispatched(
      cancelOrderAction(
        match.params.odrerNo,
        localStorage.getItem("userPhoneNo")
      )
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

  useEffect(() => {
    if (ordersInfoReducer.isLoaded && !ordersInfoReducer.error) {
      if (ordersInfoReducer.data.length) {
        setCurrentOrderDetailsState(
          ordersInfoReducer.data.filter(
            (element) => element.order_Id === match.params.odrerNo
          )
        );
      } else {
        dispatched(fetchOrdersInfo(localStorage.getItem("userPhoneNo")));
      }
    } else {
      dispatched(fetchOrdersInfo(localStorage.getItem("userPhoneNo")));
    }
  }, [ordersInfoReducer, match.params.odrerNo, dispatched]);

  useEffect(() => {
    dispatched(clearfetchOrderDetailsAction());
    dispatched(fetchOrderDetailsAction(match.params.odrerNo));
  }, [dispatched, match.params.odrerNo]);

  return (
    <div className="orderDetailsContainer">
      <CurrentPageNameHeader categoryName="Order Details" />
      <div className="orderDetailsBody">
        {ordersInfoReducer.isLoaded ? (
          currentOrderDetailsState.length ? (
            <>
              <div className="basicOrderDetails">
                <div className="orderDetailHeader">
                  Order ID -{" "}
                  <span className="orderDetail">
                    {currentOrderDetailsState[0].order_Id}
                  </span>
                </div>
              </div>
              <div className="basicOrderDetails">
                <div className="orderDetailHeader">
                  Total Amount{" "}
                  {currentOrderDetailsState[0].order_status !==
                  "Order Cancelled"
                    ? currentOrderDetailsState[0].order_status ===
                      "Order Delivered"
                      ? "Paid"
                      : currentOrderDetailsState[0].payment_mode ===
                        "Cash on Delivery"
                      ? "To be paid"
                      : "Paid"
                    : ""}
                  -{" "}
                  <span className="orderDetail">
                    {currentOrderDetailsState[0].total_amount}
                  </span>
                </div>
              </div>
              {currentOrderDetailsState[0].coupon_code_used !== "Null" && (
                <div className="basicOrderDetails">
                  <div className="orderDetailHeader">
                    Coupon Applied -{" "}
                    <span className="orderDetail">
                      {currentOrderDetailsState[0].coupon_code_used}
                    </span>
                  </div>
                </div>
              )}
              {currentOrderDetailsState[0].discount_amount < 0 && (
                <div className="basicOrderDetails">
                  <div className="orderDetailHeader">
                    Discount Amount -{" "}
                    <span className="orderDetail">
                      {currentOrderDetailsState[0].discount_amount}
                    </span>
                  </div>
                </div>
              )}
              <div className="basicOrderDetails">
                <div className="orderDetailHeader">
                  Delivery Charges -{" "}
                  <span className="orderDetail">
                    {currentOrderDetailsState[0].delivery_amount}
                  </span>
                </div>
              </div>
              {currentOrderDetailsState[0].other_amount > 0 && (
                <div className="basicOrderDetails">
                  <div className="orderDetailHeader">
                    Discount Amount -{" "}
                    <span className="orderDetail">
                      {currentOrderDetailsState[0].other_amount}
                    </span>
                  </div>
                </div>
              )}
              <div className="basicOrderDetails">
                <div className="orderDetailHeader">
                  Total No of Items -{" "}
                  <span className="orderDetail">
                    {currentOrderDetailsState[0].item_count}
                  </span>
                </div>
              </div>
              <div className="basicOrderDetails">
                <div className="orderDetailHeader">
                  Delivery Address -{" "}
                  <span className="orderDetail">
                    {currentOrderDetailsState[0].delivery_address +
                      " " +
                      currentOrderDetailsState[0].area +
                      " " +
                      currentOrderDetailsState[0].landmark +
                      " Siliguri"}
                  </span>
                </div>
              </div>
              <div className="basicOrderDetails">
                <div className="orderDetailHeader">
                  Order Status -{" "}
                  <span className="orderDetail">
                    {currentOrderDetailsState[0].order_status}
                  </span>
                </div>
              </div>
              <div className="basicOrderDetails">
                <div className="orderDetailHeader">
                  Order Placed On -{" "}
                  <span className="orderDetail">
                    {currentOrderDetailsState[0].order_receive_date}
                  </span>
                </div>
              </div>
              <div className="orderControls">
                <div className="w3-row">
                  <div className="s6 w3-col" style={{ paddingRight: 5 }}>
                    <a
                      className="secondaryButton w3-block"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://wa.me/919883509323?text=Hi I need help with my order. Order ID - ${currentOrderDetailsState[0].order_Id}`}
                    >
                      Need Help ?
                    </a>
                  </div>
                  <div className="s6 w3-col" style={{ paddingLeft: 5 }}>
                    <button
                      disabled={
                        currentOrderDetailsState[0].order_status ===
                        "Order Received"
                          ? false
                          : true
                      }
                      className={`secondaryButton w3-block w3-text-red ${
                        (currentOrderDetailsState[0].order_status !==
                          "Order Received" ||
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
            </>
          ) : (
            <NoDataFound />
          )
        ) : (
          <Loader />
        )}
        <div className="productsInOrder">
          {orderDetailsReducer.isLoaded ? (
            !orderDetailsReducer.error ? (
              orderDetailsReducer.data.length ? (
                <ProductList
                  products={orderDetailsReducer}
                  currentActivePage="orderDetails"
                />
              ) : (
                <NoDataFound />
              )
            ) : (
              <Error errorMessage={orderDetailsReducer.errorMessage} />
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
