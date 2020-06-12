import React from "react";
import "./Checkout.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";

const Checkout = () => {
  return (
    <div className="checkoutContainer">
      <CurrentPageNameHeader categoryName="Checkout" />
      <div className="checkoutData">
        <div className="priceBreakup">
          <div className="w3-row">
            <div className="s8 w3-col priceType">Items</div>
            <div className="s4 w3-col priceAmount">4900 INR</div>
          </div>
          <div className="w3-row">
            <div className="s8 w3-col priceType">Discount (10%)</div>
            <div className="s4 w3-col priceAmount">-190 INR</div>
          </div>
          <div className="w3-row">
            <div className="s8 w3-col priceType">Delivery Charges</div>
            <div className="s4 w3-col priceAmount">50 INR</div>
          </div>
          <div className="w3-row totalAmountContainer">
            <div className="s8 w3-col totalType">Total Amount</div>
            <div className="s4 w3-col totalAmount">4460 INR</div>
          </div>
        </div>
        <div className="deliveryAddressCard w3-card">
          <div className="deliveryAddressCardheading">Delivering To - </div>
          <div className="deliveryAddress">
            4B, 4th Floor, Ishani7, Energizer Fitness Center Building, Bablatala
            More, Opposite of Gopalpur Ramkumar School, Rajarhat, Kolkata -
            700136
          </div>
          <button className="linkButton">Change Address</button>
        </div>
        <div className="paymentOption">
          <div className="paymentTypeRadioButtons">
            <label className="container">
              <span className="radioButtonName">Cash on Delivery</span>
              <input type="radio" onChange="" checked="checked" name="radio" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <button className="primaryButton w3-block" style={{ marginTop: "10%" }}>
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
