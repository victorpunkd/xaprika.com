import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./PasswordOrOTP.css";
import { TextBoxComponent } from "../TextBoxComponent/TextBoxComponent";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import {
  checkIfPhoneNoExist,
  clearCheckPhoneNoExistData,
} from "../../Actions/CheckIfPhoneNoExist";
import { showAlertMessage } from "../../Actions/AlertMessageAction";
import { sendOTP, clearSendOTP } from "../../Actions/SendOTP";
import { checkOTP, clearcheckOTP } from "../../Actions/CheckOTP";
import {
  checkPasswordAction,
  clearCheckPasswordAction,
} from "../../Actions/CheckPassword";
import { passwordRegex, OTPRegex } from "../../CommonControls/Regex";

const PasswordOROTP = ({ match }) => {
  const OTPSendGapTime = 45;
  const history = useHistory();
  const dispatched = useDispatch();
  const {
    isPhoneNoExist,
    isOTPSent,
    isOTPMatching,
    checkPasswordReducer,
  } = useSelector((state) => state);
  const [timer, setTimer] = useState(OTPSendGapTime);
  const [isSendOTPButtonActive, makeSendOTPButtonActive] = useState(true);
  const [password, setPassword] = useState("");
  const [otp, setotp] = useState("");

  // main use effect
  useEffect(() => {
    dispatched(clearCheckPhoneNoExistData());
    dispatched(checkIfPhoneNoExist(match.params.phoneNo));
    return function cleanup() {
      dispatched(clearSendOTP());
      dispatched(clearCheckPasswordAction());
      dispatched(clearcheckOTP());
      dispatched(clearCheckPhoneNoExistData());
    };
  }, [match.params.phoneNo, dispatched]);

  const startAndEndTimer = useCallback(() => {
    setTimer(OTPSendGapTime);
    makeSendOTPButtonActive(false);
    let interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      makeSendOTPButtonActive(true);
    }, 1000 * OTPSendGapTime);
  }, []);

  const hanldeSendOTP = useCallback(() => {
    startAndEndTimer();
    dispatched(clearSendOTP());
    dispatched(sendOTP(match.params.phoneNo));
  }, [startAndEndTimer, match.params.phoneNo, dispatched]);

  const checkIfOTPNeedsToBeSent = useCallback(() => {
    if (
      isPhoneNoExist.isLoaded &&
      !isPhoneNoExist.data.length &&
      !isPhoneNoExist.error
    ) {
      hanldeSendOTP();
    }
  }, [
    isPhoneNoExist.isLoaded,
    isPhoneNoExist.data.length,
    isPhoneNoExist.error,
    hanldeSendOTP,
  ]);

  useEffect(() => {
    checkIfOTPNeedsToBeSent();
  }, [checkIfOTPNeedsToBeSent]);

  const checkIfOTPisCorrect = useCallback(() => {
    if (isOTPMatching.isLoaded && !isOTPMatching.error) {
      if (isOTPMatching.data[0].code === 1) {
        history.push(`/User-Registration/${match.params.phoneNo}/${otp}`);
      } else {
        dispatched(showAlertMessage("OTP is not matching"));
      }
    } else if (isOTPMatching.isLoaded && isOTPMatching.error) {
      dispatched(showAlertMessage("We faced an issue please try again later"));
    }
  }, [isOTPMatching, dispatched, history, match.params.phoneNo, otp]);

  useEffect(() => {
    checkIfOTPisCorrect();
  }, [checkIfOTPisCorrect]);

  const validateOTP = () => {
    dispatched(clearcheckOTP());
    dispatched(checkOTP(match.params.phoneNo, otp));
  };

  const checkIfPasswordisCorrect = useCallback(() => {
    if (checkPasswordReducer.isLoaded && !checkPasswordReducer.error) {
      if (checkPasswordReducer.data.length) {
        localStorage.setItem("userPhoneNo", match.params.phoneNo);
        if (sessionStorage.getItem("loginFromCheckout") !== null) {
          history.push(`/checkout`);
        } else {
          history.push(`/`);
        }
      } else {
        dispatched(showAlertMessage("Wrong Password"));
      }
    }
  }, [checkPasswordReducer, dispatched, history, match.params.phoneNo]);

  useEffect(() => {
    checkIfPasswordisCorrect();
  }, [checkIfPasswordisCorrect]);

  const validatePassword = () => {
    dispatched(clearCheckPasswordAction());
    dispatched(checkPasswordAction(match.params.phoneNo, password));
  };

  const handleSubmit = () => {
    if (isPhoneNoExist.data.length) {
      if (password) {
        validatePassword();
      } else {
        dispatched(showAlertMessage("Please enter a valid password"));
      }
    } else {
      if (otp) {
        validateOTP();
      } else {
        dispatched(showAlertMessage("Please enter a valid OTP"));
      }
    }
  };

  const handleTextBoxCompoenetOnBlur = (name, text) => {
    if (name === "password") {
      setPassword(text);
    } else {
      setotp(text);
    }
  };

  const handleForgetPasswordClick = () => {
    history.push(`/ForgetPassword/${match.params.phoneNo}`);
  };

  return (
    <div className="passwordOROTPContainer">
      <CurrentPageNameHeader categoryName="User Login" />
      <div className="passwordOROTPForm">
        {isPhoneNoExist.isLoaded ? (
          isPhoneNoExist.error ? (
            <Error errorMessage={isPhoneNoExist.errorMessage} />
          ) : (
            <>
              <div>
                <TextBoxComponent
                  value={match.params.phoneNo}
                  regex={""}
                  name="phoneNo"
                  label="Phone No"
                  disabled={true}
                  type="text"
                  onBlur={handleTextBoxCompoenetOnBlur}
                />
              </div>
              {isPhoneNoExist.data.length ? (
                <div>
                  <TextBoxComponent
                    value=""
                    regex={passwordRegex}
                    name="password"
                    label="Password"
                    disabled={false}
                    type="password"
                    onBlur={handleTextBoxCompoenetOnBlur}
                  />
                  <span
                    className="linkButton"
                    onClick={handleForgetPasswordClick}
                  >
                    Forgot Password?
                  </span>
                </div>
              ) : (
                <div>
                  <TextBoxComponent
                    value=""
                    regex={OTPRegex}
                    name="otp"
                    label="OTP"
                    disabled={false}
                    type="text"
                    onBlur={handleTextBoxCompoenetOnBlur}
                  />
                  {isOTPSent.isLoaded ? (
                    <div>
                      <div>
                        {isOTPSent.error
                          ? "We were not able to sent OTP in this number try sending it again"
                          : "We have sent an OTP to this number"}
                      </div>
                      <div>
                        {!isSendOTPButtonActive ? (
                          `Send again in ${timer}`
                        ) : (
                          <span className="linkButton" onClick={hanldeSendOTP}>
                            Send OTP
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Loader />
                  )}
                </div>
              )}
              <div className="submitButtonContainer">
                <button
                  onClick={handleSubmit}
                  className={`primaryButton w3-block`}
                >
                  Submit
                </button>
              </div>
            </>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default PasswordOROTP;
