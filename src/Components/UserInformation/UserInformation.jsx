import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import "./UserInformation.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import NoDataFound from "../NoDataFound/NoDataFound";
import { TextBoxComponent } from "../TextBoxComponent/TextBoxComponent";
import { showAlertMessage } from "../../Actions/AlertMessageAction";
import {
  fetchUserInfoAction,
  clearFetchUserInfoAction,
} from "../../Actions/FetchUserInformation";
import {
  updateUserInfoAction,
  clearUpdateUserInfoAction,
} from "../../Actions/UpdateUserInformation";

const UserInformation = () => {
  const { userInformationReducer, updateUserInformationReducer } = useSelector(
    (state) => state
  );
  const dispatched = useDispatch();
  const phoneNoState = localStorage.getItem("userPhoneNo");
  const [mailIdState, setMailIdState] = useState("");
  const [nameState, setNameState] = useState("");
  const [passwordState, setPasswordState] = useState("examplePassword");
  const [userDataState, setUserDataState] = useState([]);
  const phoneNoRegex = /^\d{10}$/;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const passwordRegex = /^[a-zA-Z0-9!@#$^&*]{6,16}$/; // has to be 6 - 16 characters long, can take alphabets numbers and !@#$^&*

  const checkIfUserInfoIsUpdated = useCallback(() => {
    if (
      updateUserInformationReducer.isLoaded &&
      !updateUserInformationReducer.error
    ) {
      if (updateUserInformationReducer.data) {
        if (updateUserInformationReducer.data.code === 1) {
          dispatched(showAlertMessage("Data Updated"));
        } else {
          dispatched(
            showAlertMessage(updateUserInformationReducer.data.message)
          );
        }
      }
    }
  }, [updateUserInformationReducer, dispatched]);

  useEffect(() => {
    checkIfUserInfoIsUpdated();
  }, [checkIfUserInfoIsUpdated]);

  const checkIfUserInfoFetched = useCallback(() => {
    if (userInformationReducer.isLoaded && !userInformationReducer.error) {
      if (userInformationReducer.data.length) {
        setMailIdState(userInformationReducer.data[0].email_id);
        setNameState(userInformationReducer.data[0].name);
        setUserDataState(userInformationReducer.data);
      }
    }
  }, [userInformationReducer]);

  useEffect(() => {
    checkIfUserInfoFetched();
  }, [checkIfUserInfoFetched]);

  useEffect(() => {
    if (localStorage.getItem("userPhoneNo") === null) {
      return <Redirect push to="/" />;
    }
    dispatched(clearFetchUserInfoAction());
    dispatched(fetchUserInfoAction(localStorage.getItem("userPhoneNo")));
    return function cleanUp() {
      dispatched(clearFetchUserInfoAction());
      dispatched(clearUpdateUserInfoAction());
    };
  }, [dispatched]);

  const handleTextBoxCompoenetOnBlur = (name, text) => {
    if (name === "name") {
      setNameState(text);
    } else if (name === "password") {
      setPasswordState(text);
    }
  };

  const handleUpdateInfoClick = () => {
    if (phoneNoState && mailIdState && nameState && passwordState) {
      dispatched(clearUpdateUserInfoAction());
      dispatched(
        updateUserInfoAction(
          localStorage.getItem("userPhoneNo"),
          mailIdState,
          nameState,
          passwordState
        )
      );
    } else {
      dispatched(showAlertMessage("All the fields are mandatory"));
    }
  };

  return (
    <div className="userInformationContainer">
      <CurrentPageNameHeader categoryName="Manage Account" />
      <div className="userInformationForm">
        {userInformationReducer.isLoaded ? (
          userInformationReducer.Error ? (
            <Error errorMessage={userInformationReducer.errorMessage} />
          ) : userDataState.length ? (
            <>
              <div className="textBoxContainer">
                <TextBoxComponent
                  value={phoneNoState}
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
                  value={userDataState[0].email_id}
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
                  value={userDataState[0].name}
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
                  value={passwordState}
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
                  onClick={handleUpdateInfoClick}
                  className="primaryButton w3-block"
                >
                  Update Information
                </button>
              </div>
            </>
          ) : (
            <NoDataFound />
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default UserInformation;
