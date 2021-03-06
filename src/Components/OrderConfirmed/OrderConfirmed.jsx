import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./OrderConfirmed.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { confirmOrderAction } from "../../Actions/ConfirmOrder";
import { clearConfirmOrderAction } from "../../Actions/ConfirmOrder";
import { clearFetchDeliveryAddressAction } from "../../Actions/FetchDeliveryAddress";
import { clearFetchProductsUnderCart } from "../../Actions/FetchProductsUnderCart";
import { clearCart } from "../../Actions/CartAddRemoveProductAction";
import { clearAppliedCouponCodeAction } from "../../Actions/ApplyClearCouponCode";
import { clearFetchCouponInformationAction } from "../../Actions/FetchCouponInformation";
import { clearfetchFinalCheckoutCalculationAction } from "../../Actions/FetchFinalCheckoutCalculation";

const OrderConfirmed = () => {
  const {
    finalCheckoutCalculationReducer,
    cartData,
    deliveryAddressReducer,
    confirmOrderReducer,
    appliedCouponCodeReducer,
  } = useSelector((state) => state);
  const dispatched = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (
      localStorage.getItem("userPhoneNo") === null ||
      !finalCheckoutCalculationReducer.data.length ||
      !cartData.length
    ) {
      history.push("/");
      return;
    }
    dispatched(clearConfirmOrderAction());
    dispatched(
      confirmOrderAction(
        localStorage.getItem("userPhoneNo"),
        cartData.length,
        finalCheckoutCalculationReducer.data[
          finalCheckoutCalculationReducer.data.length - 1
        ].totalPrice,
        appliedCouponCodeReducer
          ? finalCheckoutCalculationReducer.data[
              finalCheckoutCalculationReducer.data.length - 3
            ].totalPrice
          : 0,
        finalCheckoutCalculationReducer.data[
          finalCheckoutCalculationReducer.data.length - 2
        ].totalPrice,
        0,
        deliveryAddressReducer.data[0].address_line_1,
        deliveryAddressReducer.data[0].area,
        deliveryAddressReducer.data[0].city,
        deliveryAddressReducer.data[0].pin_code,
        deliveryAddressReducer.data[0].state,
        deliveryAddressReducer.data[0].landmark,
        localStorage.getItem("userPhoneNo"),
        cartData,
        appliedCouponCodeReducer.coupon
      )
    );
    return function cleanup() {
      dispatched(clearConfirmOrderAction());
      dispatched(clearFetchDeliveryAddressAction());
      dispatched(clearFetchProductsUnderCart());
      dispatched(clearCart());
      dispatched(clearfetchFinalCheckoutCalculationAction());
      dispatched(clearAppliedCouponCodeAction());
      dispatched(clearFetchCouponInformationAction());
    };
  }, [
    dispatched,
    cartData,
    deliveryAddressReducer,
    finalCheckoutCalculationReducer,
    history,
    appliedCouponCodeReducer,
  ]);

  return (
    <div className="orderConfirmedContainer">
      <CurrentPageNameHeader categoryName="Order Confirmation" />
      {confirmOrderReducer.isLoaded ? (
        confirmOrderReducer.error || confirmOrderReducer.data.code === 0 ? (
          <Error errorMessage={confirmOrderReducer.errorMessage} />
        ) : (
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
                Order Number -{" "}
                <span className="highlitedText">
                  {confirmOrderReducer.data.orderId}
                </span>
              </div>
              <div>
                Amount To be Paid -{" "}
                <span className="highlitedText">
                  {
                    finalCheckoutCalculationReducer.data[
                      finalCheckoutCalculationReducer.data.length - 1
                    ].totalPrice
                  }{" "}
                  INR
                </span>
              </div>
              <Link to={`/OrderDetails/${confirmOrderReducer.data.orderId}`}>
                <button className="linkButton">Track Your Orders</button>
              </Link>
            </div>
          </div>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default OrderConfirmed;
