import React, { useEffect, useState, useCallback } from "react";
import "./ApplyCouponModal.css";
import { useDispatch, useSelector } from "react-redux";
import { TextBoxComponent } from "../TextBoxComponent/TextBoxComponent";
import { couponCodeRegex } from "../../CommonControls/Regex";
import { hideApplyCouponModalAction } from "../../Actions/ShowHideApplyCouponModal";
import {
  clearFetchCouponInformationAction,
  fetchCouponInformationAction,
} from "../../Actions/FetchCouponInformation";
import {
  clearAppliedCouponCodeAction,
  applyCouponCodeAction,
} from "../../Actions/ApplyClearCouponCode";

const ApplyCouponModal = () => {
  const dispatched = useDispatch();
  const [coupon, setCoupon] = useState("");
  const [couponErrorMessage, setCouponErrorMessage] = useState("");
  const [isButtonSubmitting, setIsButtonSubimitting] = useState(false);
  const {
    couponValidationReducer,
    finalCheckoutCalculationReducer,
  } = useSelector((state) => state);
  const handleTextBoxCompoenetOnBlur = (name, text) => {
    if (name === "couponCode") {
      setCoupon(text);
    }
  };

  const handleApplyClick = () => {
    let totalProductAmount =
      finalCheckoutCalculationReducer.data[
        finalCheckoutCalculationReducer.data.length - 1
      ].totalPrice;
    if (!totalProductAmount > 0) {
      setCouponErrorMessage("Something went wrong, please try again");
      return;
    }
    if (coupon) {
      dispatched(clearFetchCouponInformationAction());
      dispatched(fetchCouponInformationAction(coupon, totalProductAmount));
      setIsButtonSubimitting(true);
    } else {
      setCouponErrorMessage("The coupon is invalid");
    }
  };

  const checkIfTheCouponIsvalid = useCallback(() => {
    if (couponValidationReducer.isLoaded && !couponValidationReducer.error) {
      setIsButtonSubimitting(false);
      if (couponValidationReducer.data.length) {
        if (couponValidationReducer.data[0].code === 1) {
          dispatched(clearAppliedCouponCodeAction());
          dispatched(applyCouponCodeAction(coupon));
          dispatched(hideApplyCouponModalAction());
        } else {
          setCouponErrorMessage(couponValidationReducer.data[0].message);
          dispatched(clearFetchCouponInformationAction());
        }
      }
    }
  }, [couponValidationReducer, dispatched, coupon]);

  useEffect(() => {
    checkIfTheCouponIsvalid();
  }, [checkIfTheCouponIsvalid]);

  useEffect(() => {});

  const handleCancelClick = () => {
    dispatched(hideApplyCouponModalAction());
  };
  return (
    <div className="applyCouponModalContainer">
      <div className="applyCouponModal">
        <div className="applyCouponHeading">Do you have a coupon ?</div>
        <div className="couponTextBoxDiv">
          <TextBoxComponent
            value=""
            regex={couponCodeRegex}
            name="couponCode"
            label="Coupon Code"
            disabled={false}
            type="text"
            onBlur={handleTextBoxCompoenetOnBlur}
          />
        </div>
        <div className="errorCouponMessageDiv">
          <div className="errorCouponMessage">{couponErrorMessage}</div>
        </div>
        <div className="couponCodeModalButtonsDiv w3-row">
          <div className="s6 w3-col">
            <button
              className={`secondaryButton w3-block ${
                isButtonSubmitting && "disabledButton"
              }`}
              onClick={handleApplyClick}
            >
              {isButtonSubmitting ? "Loading..." : "Apply"}
            </button>
          </div>
          <div className="s6 w3-col" style={{ paddingLeft: 5 }}>
            <button
              className="secondaryButton w3-block w3-text-red"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyCouponModal;
