import React from "react";
import "./UserLogin.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import { TextBoxComponent } from "../TextBoxComponent/TextBoxComponent";

const UserLogin = () => {
  const handleTextBoxCompoenetOnBlur = (name, text) => {
    console.log(name, text);
  };

  const handleLoginSignupClick = () => {
    alert("you are logged in");
    localStorage.setItem("userPhoneNo", "9832634856");
  };

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
            className="primaryButton w3-block"
          >
            Login/Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
