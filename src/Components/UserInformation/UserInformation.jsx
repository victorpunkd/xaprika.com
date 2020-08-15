import React, { useEffect } from "react";
import { Redirect } from "react-router";
import "./UserInformation.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import { TextBoxComponent } from "../TextBoxComponent/TextBoxComponent";

const UserInformation = () => {
  useEffect(() => {
    if (localStorage.getItem("userPhoneNo") === null) {
      return <Redirect push to="/" />;
    }
  }, []);

  const handleTextBoxCompoenetOnBlur = (name, text) => {
    console.log(name, text);
  };

  const phoneNoRegex = /^\d{10}$/;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  return (
    <div className="userInformationContainer">
      <CurrentPageNameHeader categoryName="Manage Account" />
      <div className="userInformationForm">
        <div className="textBoxContainer">
          <TextBoxComponent
            value="9832634856"
            regex={phoneNoRegex}
            name="phoneNo"
            label="Phone No"
            disabled={true}
            type="text"
            onBlur={handleTextBoxCompoenetOnBlur}
          />
        </div>

        <div className="textBoxContainer">
          <TextBoxComponent
            value="vctrdb@gmail.com"
            regex={emailRegex}
            name="emailId"
            label="Email ID"
            disabled={true}
            type="text"
            onBlur={handleTextBoxCompoenetOnBlur}
          />
        </div>

        <div className="textBoxContainer">
          <TextBoxComponent
            value="Victor Deb"
            regex={nameRegex}
            name="name"
            label="Name"
            disabled={false}
            type="text"
            onBlur={handleTextBoxCompoenetOnBlur}
          />
        </div>

        <div className="textBoxContainer">
          <TextBoxComponent
            value="zzzzzzzz"
            regex={nameRegex}
            name="password"
            label="Password"
            disabled={false}
            type="password"
            onBlur={handleTextBoxCompoenetOnBlur}
          />
        </div>
        <div className="updateButtonContainer">
          <button className="primaryButton w3-block">Update Information</button>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
