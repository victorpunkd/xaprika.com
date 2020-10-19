import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Checkout.css";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import { showAlertMessage } from "../../Actions/AlertMessageAction";
import { showApplyCouponModalAction } from "../../Actions/ShowHideApplyCouponModal";
import {
  fetchFinalCheckoutCalculationAction,
  clearfetchFinalCheckoutCalculationAction,
} from "../../Actions/FetchFinalCheckoutCalculation";
import {
  fetchDeliveryAddressAction,
  clearFetchDeliveryAddressAction,
} from "../../Actions/FetchDeliveryAddress";
import {
  fetchExpectedDeliveryDateAction,
  clearFetchExpectedDeliveryDateAction,
} from "../../Actions/FetchExpectedDeliveryDate";
import { clearAppliedCouponCodeAction } from "../../Actions/ApplyClearCouponCode";
import { clearFetchCouponInformationAction } from "../../Actions/FetchCouponInformation";

const Checkout = () => {
  const {
    finalCheckoutCalculationReducer,
    cartData,
    deliveryAddressReducer,
    expectedDeliveryDateReducer,
    couponValidationReducer,
    appliedCouponCodeReducer,
  } = useSelector((state) => state);
  const history = useHistory();
  const dispatched = useDispatch();
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const handleChangeAddressClick = () => {
    sessionStorage.setItem("changeAddressFromCheckout", true);
    history.push(`/AddressManagement`);
  };

  const handleHaveCouponClick = () => {
    dispatched(showApplyCouponModalAction());
  };

  const handleRemoveAppliedCouponClick = () => {
    dispatched(clearAppliedCouponCodeAction());
    dispatched(clearFetchCouponInformationAction());
    setIsCouponApplied(false);
  };

  const handlePaymentOptionChange = () => {
    // todo need to implement when online payment will come
  };

  const handlePlaceOrder = () => {
    if (
      finalCheckoutCalculationReducer.data[
        finalCheckoutCalculationReducer.data.length - 1
      ].totalPrice > 0 &&
      deliveryAddressReducer.data.length
    ) {
      // todo create order
      history.push(`/Confirm-Order`); // todo send order id as param
    } else if (!deliveryAddressReducer.data.length) {
      dispatched(showAlertMessage("Please add an address to continue"));
    }
  };

  useEffect(() => {
    if (!cartData.length) {
      history.push(`/`);
      return;
    }
    if (localStorage.getItem("userPhoneNo") === null) {
      sessionStorage.setItem("loginFromCheckout", true);
      history.push(`/UserLogin`);
      return;
    }
    dispatched(clearfetchFinalCheckoutCalculationAction());
    dispatched(
      fetchFinalCheckoutCalculationAction(
        cartData,
        appliedCouponCodeReducer.coupon
      )
    );
    dispatched(clearFetchDeliveryAddressAction());
    dispatched(fetchDeliveryAddressAction(localStorage.getItem("userPhoneNo")));
    dispatched(clearFetchExpectedDeliveryDateAction());
    dispatched(fetchExpectedDeliveryDateAction());
  }, [dispatched, cartData, history, appliedCouponCodeReducer]);

  const checkIfTheCouponIsvalid = useCallback(() => {
    if (couponValidationReducer.isLoaded && !couponValidationReducer.error) {
      if (couponValidationReducer.data.length) {
        if (couponValidationReducer.data[0].code === 1) {
          // coupon is valid
          setIsCouponApplied(true);
        } else {
          // coupon is not valid
        }
      }
    }
  }, [couponValidationReducer]);

  useEffect(() => {
    checkIfTheCouponIsvalid();
  }, [checkIfTheCouponIsvalid]);

  return (
    <div className="checkoutContainer">
      <CurrentPageNameHeader categoryName="Checkout" />
      {finalCheckoutCalculationReducer.isLoaded &&
      deliveryAddressReducer.isLoaded ? (
        finalCheckoutCalculationReducer.error ||
        deliveryAddressReducer.error ? (
          <Error errorMessage={finalCheckoutCalculationReducer.errorMessage} />
        ) : (
          <div className="checkoutData">
            <div className="priceBreakup">
              {finalCheckoutCalculationReducer.data.map((element, index) =>
                finalCheckoutCalculationReducer.data.length - 1 !== index ? (
                  <div key={index} className="w3-row">
                    <div className="s8 w3-col priceType">{element.header}</div>
                    <div className="s4 w3-col priceAmount">
                      Rs. {element.totalPrice}
                    </div>
                  </div>
                ) : (
                  <div key={index} className="w3-row totalAmountContainer">
                    <div className="s8 w3-col totalType">{element.header}</div>
                    <div className="s4 w3-col totalAmount">
                      Rs. {element.totalPrice}
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="couponSection">
              {isCouponApplied ? (
                <span className="appliedCouponCode">
                  {couponValidationReducer.isLoaded &&
                  !couponValidationReducer.error &&
                  couponValidationReducer.data.length &&
                  couponValidationReducer.data[0].code === 1 &&
                  appliedCouponCodeReducer ? (
                    <>
                      <span>
                        Coupon{" "}
                        <b>{appliedCouponCodeReducer.coupon.toUpperCase()}</b>{" "}
                        applied{" "}
                        <span>
                          <i
                            className="fa fa-times-circle w3-text-red"
                            onClick={handleRemoveAppliedCouponClick}
                            style={{ fontSize: 18 }}
                          ></i>
                        </span>
                      </span>
                      <div className="appliedCouponDescription">
                        {appliedCouponCodeReducer.description}
                      </div>
                    </>
                  ) : (
                    "Something Went Wrong"
                  )}
                </span>
              ) : (
                <button className="linkButton" onClick={handleHaveCouponClick}>
                  Have a Coupon?
                </button>
              )}
            </div>

            <div className="deliveryAddressCard w3-card">
              <div className="deliveryAddressCardheading">Delivering To - </div>
              <div className="deliveryAddress">
                {deliveryAddressReducer.data.length ? (
                  <span>
                    <b>{deliveryAddressReducer.data[0].tag_name} - </b>
                    {deliveryAddressReducer.data[0].address_line_1},{" "}
                    {deliveryAddressReducer.data[0].area},{" "}
                    {deliveryAddressReducer.data[0].landmark},{" "}
                    {deliveryAddressReducer.data[0].city},{" "}
                    {deliveryAddressReducer.data[0].state}
                  </span>
                ) : (
                  "No address found"
                )}
              </div>
              <button className="linkButton" onClick={handleChangeAddressClick}>
                Add/Change Address
              </button>
            </div>
            <div className="paymentOption">
              <div className="paymentTypeRadioButtons">
                <label className="container">
                  <span className="radioButtonName">Cash on Delivery</span>
                  <input
                    type="radio"
                    onChange={handlePaymentOptionChange}
                    checked="checked"
                    name="radio"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="expectedDeliveryDate">
              {expectedDeliveryDateReducer.isLoaded ? (
                <div className="deliveryMessage">
                  <span className="deliveryText">
                    You order will be delivered latest by{" "}
                  </span>
                  <span className="deliveryDate">
                    {expectedDeliveryDateReducer.data[0].expectedDeliveryDate}
                  </span>
                  <div className="specialMessage">
                    *{expectedDeliveryDateReducer.data[0].message}
                  </div>
                </div>
              ) : (
                <Loader />
              )}
            </div>
            <button
              className="primaryButton w3-block placeOrderButton"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Checkout;
