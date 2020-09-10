import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./UserLogin.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import { TextBoxComponent } from "../TextBoxComponent/TextBoxComponent";
import { showAlertMessage } from "../../Actions/AlertMessageAction";
import { useEffect } from "react";

const UserLogin = () => {
  const history = useHistory();
  const [phoneNo, setPhoneNo] = useState("");
  const dispatched = useDispatch();
  const handleTextBoxCompoenetOnBlur = (name, text) => {
    setPhoneNo(text);
  };

  const handleLoginSignupClick = () => {
    if (phoneNo === "") {
      dispatched(showAlertMessage("The phone no is not valid"));
    } else {
      history.push(`/Password-OTP/${phoneNo}`);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userPhoneNo") !== null) {
      history.push("/");
      return;
    }
    if (sessionStorage.getItem("loginFromCheckout") !== null) {
      dispatched(
        showAlertMessage("You need to login/signup to place an order")
      );
    }
  }, [dispatched, history]);

  const phoneNoRegex = /^\d{10}$/;
  return (
    <div className="userLoginContainer">
      <CurrentPageNameHeader categoryName="User Login/Signup" />
      <div className="userLoginForm">
        <div className="textBoxContainer">
          <TextBoxComponent
            value=""
            regex={phoneNoRegex}
            name="phoneNo"
            label="Phone No"
            disabled={false}
            type="text"
            onBlur={handleTextBoxCompoenetOnBlur}
          />
        </div>
        <div className="updateButtonContainer">
          <button
            onClick={handleLoginSignupClick}
            className={`primaryButton w3-block`}
          >
            Login/Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
