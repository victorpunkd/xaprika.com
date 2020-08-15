import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Checkout.css";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import { fetchFinalCheckoutCalculationAction } from "../../Actions/FetchFinalCheckoutCalculation";
import { clearfetchFinalCheckoutCalculationAction } from "../../Actions/FetchFinalCheckoutCalculation";
import { fetchDeliveryAddressAction } from "../../Actions/FetchDeliveryAddress";
import { clearFetchDeliveryAddressAction } from "../../Actions/FetchDeliveryAddress";

const Checkout = () => {
  const {
    finalCheckoutCalculationReducer,
    cartData,
    deliveryAddressReducer,
  } = useSelector((state) => state);
  const history = useHistory();
  const dispatched = useDispatch();

  const handleChangeAddressClick = () => {
    sessionStorage.setItem("changeAddressFromCheckout", true);
    history.push(`/AddressManagement`);
  };

  const handlePaymentOptionChange = () => {
    // todo need to implement when net pyment will come
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
    dispatched(fetchFinalCheckoutCalculationAction(cartData));
    dispatched(clearFetchDeliveryAddressAction());
    dispatched(fetchDeliveryAddressAction(localStorage.getItem("userPhoneNo")));
  }, [dispatched, cartData, history]);
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
                      {element.totalPrice} INR
                    </div>
                  </div>
                ) : (
                  <div key={index} className="w3-row totalAmountContainer">
                    <div className="s8 w3-col totalType">{element.header}</div>
                    <div className="s4 w3-col totalAmount">
                      {element.totalPrice} INR
                    </div>
                  </div>
                )
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
                    {deliveryAddressReducer.data[0].pin_code},{" "}
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
            <button
              className="primaryButton w3-block"
              style={{ marginTop: "10%" }}
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
