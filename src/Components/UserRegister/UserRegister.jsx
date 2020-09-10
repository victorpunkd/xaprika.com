import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./UserRegister.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import Loader from "../Loader/Loader";
import { TextBoxComponent } from "../TextBoxComponent/TextBoxComponent";
import { showAlertMessage } from "../../Actions/AlertMessageAction";
import { checkOTP } from "../../Actions/CheckOTP";
import { clearcheckOTP } from "../../Actions/CheckOTP";
import {
  insertUserAction,
  clearInsertUserAction,
} from "../../Actions/InsertUser";
import {
  phoneNoRegex,
  emailRegex,
  nameRegex,
  passwordRegex,
} from "../../CommonControls/Regex";

const UserRegister = ({ match }) => {
  const history = useHistory();
  const dispatched = useDispatch();
  const { isOTPMatching, isInsertUserSuccessfullReducer } = useSelector(
    (state) => state
  );
  const [emailIdState, setEmailIdState] = useState("");
  const [nameState, setNameState] = useState("");
  const [PasswordState, setPasswordState] = useState("");
  const [isButtonSubmitting, setIsButtonSubimitting] = useState(false);

  const handleTextBoxCompoenetOnBlur = (name, text) => {
    if (name === "emailId") {
      setEmailIdState(text);
    } else if (name === "name") {
      setNameState(text);
    } else {
      setPasswordState(text);
    }
  };

  const handleRegisterClick = () => {
    if (nameState && emailIdState && PasswordState) {
      setIsButtonSubimitting(true);
      dispatched(clearInsertUserAction());
      dispatched(
        insertUserAction(
          match.params.phoneNo,
          emailIdState,
          nameState,
          PasswordState
        )
      );
    } else {
      dispatched(showAlertMessage("All the fields are mandatory"));
    }
  };

  const checkIsUserDataInsertedSuccessfully = useCallback(() => {
    if (
      isInsertUserSuccessfullReducer.isLoaded &&
      !isInsertUserSuccessfullReducer.error
    ) {
      setIsButtonSubimitting(false);
      if (isInsertUserSuccessfullReducer.data.code === 1) {
        localStorage.setItem("userPhoneNo", match.params.phoneNo);
        if (sessionStorage.getItem("loginFromCheckout") !== null) {
          sessionStorage.removeItem("loginFromCheckout");
          history.push(`/checkout`);
        } else {
          history.push(`/`);
        }
      } else {
        dispatched(
          showAlertMessage(isInsertUserSuccessfullReducer.data.message)
        );
      }
    }
  }, [
    isInsertUserSuccessfullReducer,
    history,
    dispatched,
    match.params.phoneNo,
  ]);

  useEffect(() => {
    checkIsUserDataInsertedSuccessfully();
  }, [checkIsUserDataInsertedSuccessfully]);

  const checkIfOTPisCorrect = useCallback(() => {
    if (isOTPMatching.isLoaded && !isOTPMatching.error) {
      if (isOTPMatching.data[0].code === 0) {
        history.push(`/`);
      }
    } else if (isOTPMatching.isLoaded && isOTPMatching.error) {
      dispatched(showAlertMessage("We faced an issue please try again later"));
    }
  }, [isOTPMatching, dispatched, history]);

  useEffect(() => {
    checkIfOTPisCorrect();
  }, [checkIfOTPisCorrect]);

  useEffect(() => {
    dispatched(clearcheckOTP());
    dispatched(checkOTP(match.params.phoneNo, match.params.otp));
    return function cleanup() {
      dispatched(clearcheckOTP());
      dispatched(clearInsertUserAction());
    };
  }, [dispatched, match.params.phoneNo, match.params.otp]);

  return (
    <div className="userRegisterContainer">
      <CurrentPageNameHeader categoryName="User Register" />
      <div className="userInformationForm">
        {isOTPMatching.isLoaded ? (
          <>
            <div className="textBoxContainer">
              <TextBoxComponent
                value={match.params.phoneNo}
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
                value=""
                regex={emailRegex}
                name="emailId"
                label="Email ID"
                disabled={false}
                type="text"
                onBlur={handleTextBoxCompoenetOnBlur}
              />
            </div>

            <div className="textBoxContainer">
              <TextBoxComponent
                value=""
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
                value=""
                regex={passwordRegex}
                name="password"
                label="Password"
                disabled={false}
                type="password"
                onBlur={handleTextBoxCompoenetOnBlur}
              />
            </div>
            <div className="updateButtonContainer">
              <button
                disabled={isButtonSubmitting}
                onClick={handleRegisterClick}
                className={`primaryButton w3-block ${
                  isButtonSubmitting && "disabledButton"
                }`}
              >
                {isButtonSubmitting ? "Loading..." : "Register"}
              </button>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default UserRegister;
