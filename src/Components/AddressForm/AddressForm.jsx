import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AddressForm.css";
import { useHistory } from "react-router-dom";
import { TextBoxComponent } from "../TextBoxComponent/TextBoxComponent";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import { showAlertMessage } from "../../Actions/AlertMessageAction";
import {
  addAddressAction,
  clearAddAddressAction,
} from "../../Actions/AddAddress";

const AddressForm = () => {
  const addressLine1 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/; // todo only supports unlimited alphabets need to put a length check and add special characters
  const history = useHistory();
  const { addAdressReducer } = useSelector((state) => state);
  const dispatched = useDispatch();
  const [addressState, setAddressState] = useState("");
  const [areaState, setAreaState] = useState("");
  const [landmarkState, setLandmarkState] = useState("");
  const cityState = "Siliguri";
  const pincodeState = "NA";
  const stateState = "West Bengal";
  const [tagnameState, setTagnameState] = useState("");

  const handleTextBoxCompoenetOnBlur = (name, text) => {
    if (name === "address") {
      setAddressState(text);
    } else if (name === "area") {
      setAreaState(text);
    } else if (name === "landmark") {
      setLandmarkState(text);
    } else if (name === "tagname") {
      setTagnameState(text);
    }
  };

  const checkIfAddressInserted = useCallback(() => {
    if (addAdressReducer.isLoaded) {
      if (!addAdressReducer.error) {
        if (addAdressReducer.data.code === 0) {
          dispatched(showAlertMessage(addAdressReducer.data.message));
        } else {
          history.push("/AddressManagement");
        }
      }
    }
  }, [addAdressReducer, dispatched, history]);

  useEffect(() => {
    checkIfAddressInserted();
  }, [checkIfAddressInserted]);

  const handleAddAddressOnClick = () => {
    if (
      addressState &&
      areaState &&
      landmarkState &&
      cityState &&
      pincodeState &&
      tagnameState
    ) {
      dispatched(clearAddAddressAction());
      dispatched(
        addAddressAction(
          localStorage.getItem("userPhoneNo"),
          addressState,
          areaState,
          landmarkState,
          cityState,
          pincodeState,
          stateState,
          tagnameState
        )
      );
    } else {
      dispatched(showAlertMessage("All the fields are mandatory"));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userPhoneNo") === null) {
      history.pushState("/");
      return;
    }
    return function cleanup() {
      dispatched(clearAddAddressAction());
    };
  }, [dispatched, history]);

  return (
    <div className="addressFormContainer">
      <CurrentPageNameHeader categoryName="Add Address" />
      <div className="addressFormBody">
        <>
          <div className="textBoxContainer">
            <TextBoxComponent
              value=""
              regex={addressLine1}
              name="address"
              label="Address"
              disabled={false}
              type="text"
              onBlur={handleTextBoxCompoenetOnBlur}
            />
          </div>
          <div className="textBoxContainer">
            <TextBoxComponent
              value=""
              regex={addressLine1}
              name="area"
              label="Area"
              disabled={false}
              type="text"
              onBlur={handleTextBoxCompoenetOnBlur}
            />
          </div>
          <div className="textBoxContainer">
            <TextBoxComponent
              value=""
              regex={addressLine1}
              name="landmark"
              label="Landmark"
              disabled={false}
              type="text"
              onBlur={handleTextBoxCompoenetOnBlur}
            />
          </div>
          <div className="textBoxContainer">
            <TextBoxComponent
              value="Siliguri"
              regex={addressLine1}
              name="city"
              label="City"
              disabled={true}
              type="text"
              onBlur={handleTextBoxCompoenetOnBlur}
            />
          </div>
          <div className="textBoxContainer">
            <TextBoxComponent
              value=""
              regex={addressLine1}
              name="tagname"
              label="Address Type (Home, Office etc)"
              disabled={false}
              type="text"
              onBlur={handleTextBoxCompoenetOnBlur}
            />
          </div>
          <div className="updateButtonContainer">
            <button
              onClick={handleAddAddressOnClick}
              className="primaryButton w3-block"
            >
              Add Address
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default AddressForm;
