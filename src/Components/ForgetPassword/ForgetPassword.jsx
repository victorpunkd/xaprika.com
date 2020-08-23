import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "./ForgetPassword.css";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { TextBoxComponent } from "../TextBoxComponent/TextBoxComponent";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import { OTPRegex } from "../../CommonControls/Regex";
import { showAlertMessage } from "../../Actions/AlertMessageAction";
import { checkOTP, clearcheckOTP } from "../../Actions/CheckOTP";
import { sendOTP, clearSendOTP } from "../../Actions/SendOTP";
import {
  checkIfPhoneNoExist,
  clearCheckPhoneNoExistData,
} from "../../Actions/CheckIfPhoneNoExist";

const ForgetPassword = ({ match }) => {
  const OTPSendGapTime = 45;
  const { isPhoneNoExist, isOTPSent, isOTPMatching } = useSelector(
    (state) => state
  );

  const history = useHistory();
  const dispatched = useDispatch();
  const [timer, setTimer] = useState(OTPSendGapTime);
  const [isSendOTPButtonActive, makeSendOTPButtonActive] = useState(true);
  const [otp, setotp] = useState("");

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
      isPhoneNoExist.data.length &&
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

  useEffect(() => {
    dispatched(clearCheckPhoneNoExistData());
    dispatched(checkIfPhoneNoExist(match.params.phoneNo));
    return function cleanup() {
      dispatched(clearSendOTP());
      dispatched(clearcheckOTP());
      dispatched(clearCheckPhoneNoExistData());
    };
  }, [match.params.phoneNo, dispatched]);

  const checkIfOTPisCorrect = useCallback(() => {
    if (isOTPMatching.isLoaded && !isOTPMatching.error) {
      if (isOTPMatching.data[0].code === 1) {
        localStorage.setItem("userPhoneNo", match.params.phoneNo);
        history.push(`/UserInformation`);
      } else {
        dispatched(showAlertMessage("OTP is not matching"));
      }
    } else if (isOTPMatching.isLoaded && isOTPMatching.error) {
      dispatched(showAlertMessage("We faced an issue please try again later"));
    }
  }, [isOTPMatching, dispatched, history, match.params.phoneNo]);

  useEffect(() => {
    checkIfOTPisCorrect();
  }, [checkIfOTPisCorrect]);

  const handleTextBoxCompoenetOnBlur = (name, text) => {
    if (name === "otp") {
      setotp(text);
    }
  };

  const handleSubmit = () => {
    if (otp) {
      validateOTP();
    } else {
      dispatched(showAlertMessage("Please enter a valid OTP"));
    }
  };

  const validateOTP = () => {
    dispatched(clearcheckOTP());
    dispatched(checkOTP(match.params.phoneNo, otp));
  };

  return (
    <div className="forgetPasswordContainer">
      <CurrentPageNameHeader categoryName="Forget Password" />
      <div className="forgetPasswordForm">
        {isPhoneNoExist.isLoaded ? (
          isPhoneNoExist.error ? (
            <Error errorMessage={isPhoneNoExist.errorMessage} />
          ) : isPhoneNoExist.data.length ? (
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
              <div>
                <TextBoxComponent
                  value={""}
                  regex={OTPRegex}
                  name="otp"
                  label="OTP"
                  disabled={false}
                  type="text"
                  onBlur={handleTextBoxCompoenetOnBlur}
                />
                {isOTPSent.isLoaded ? (
                  <>
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
                  </>
                ) : (
                  <Loader />
                )}
              </div>
              <div className="submitButtonContainer">
                <button
                  onClick={handleSubmit}
                  className={`primaryButton w3-block`}
                >
                  Submit
                </button>
              </div>
            </>
          ) : (
            <Redirect push to={`/Password-OTP/${match.params.phoneNo}`} />
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
