import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AlertMessage.css";
import { hideAlertMessage } from "../../Actions/AlertMessageAction";

const AlertMessage = () => {
  const { alertMessage } = useSelector((state) => state);
  const dispatched = useDispatch();
  let closeAlertTimeOut;

  const closeAlertMessageAfterSomeTime = (seconds) => {
    closeAlertTimeOut = setTimeout(() => {
      dispatched(hideAlertMessage());
    }, seconds * 1000);
  };

  useEffect(() => {
    clearTimeout(closeAlertTimeOut);
    closeAlertMessageAfterSomeTime(5);
    return function cleanUp() {
      clearTimeout(closeAlertTimeOut);
    };
  });
  return (
    <div className="alertMessageContainer w3-row w3-animate-left">
      <div className="w3-col s9">{alertMessage.message}</div>
      <div
        className="w3-col s3"
        onClick={() => {
          dispatched(hideAlertMessage());
        }}
        style={{ textAlign: "right" }}
      >
        X
      </div>
    </div>
  );
};

export default AlertMessage;
