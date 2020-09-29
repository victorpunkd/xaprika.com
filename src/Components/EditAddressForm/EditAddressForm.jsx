import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./EditAddressForm.css";
import { useHistory } from "react-router-dom";
import { TextBoxComponent } from "../TextBoxComponent/TextBoxComponent";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import { showAlertMessage } from "../../Actions/AlertMessageAction";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import NoDataFound from "../NoDataFound/NoDataFound";
import {
  fetchAddressInfoAction,
  clearFetchAddressInfoAction,
} from "../../Actions/FetchAddressInfo";
import {
  updateAddressAction,
  clearUpdateAddressAction,
} from "../../Actions/UpdateAddress";
import { addressLine1Regex } from "../../CommonControls/Regex";

const EditAddressForm = ({ match }) => {
  const history = useHistory();
  const { addressInfoReducer, updateAddressReducer } = useSelector(
    (state) => state
  );
  const dispatched = useDispatch();
  const [tagNameAddressFilterState, setTagNameAddressFilterState] = useState(
    []
  );
  const [addressState, setAddressState] = useState("");
  const [areaState, setAreaState] = useState("");
  const [landmarkState, setLandmarkState] = useState("");
  const cityState = "Siliguri";
  const pincodeState = "NA";
  const stateState = "West Bengal";
  const [tagnameState, setTagnameState] = useState("");
  const [isButtonSubmitting, setIsButtonSubimitting] = useState(false);

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

  const checkIfAddressUpdated = useCallback(() => {
    if (updateAddressReducer.isLoaded && !updateAddressReducer.error) {
      setIsButtonSubimitting(false);
      if (updateAddressReducer.data) {
        if (updateAddressReducer.data.code === 1) {
          history.push("/AddressManagement");
        } else {
          dispatched(showAlertMessage(updateAddressReducer.data.message));
        }
      }
    }
  }, [updateAddressReducer, history, dispatched]);

  useEffect(() => {
    checkIfAddressUpdated();
  }, [checkIfAddressUpdated]);

  const checkIfTagAddressUpdated = useCallback(() => {
    if (tagNameAddressFilterState.length) {
      setAddressState(tagNameAddressFilterState[0].address_line_1);
      setAreaState(tagNameAddressFilterState[0].area);
      setLandmarkState(tagNameAddressFilterState[0].landmark);
      setTagnameState(tagNameAddressFilterState[0].tag_name);
    }
  }, [tagNameAddressFilterState]);

  useEffect(() => {
    checkIfTagAddressUpdated();
  }, [checkIfTagAddressUpdated]);

  const checkIfAddressFetched = useCallback(() => {
    if (addressInfoReducer.isLoaded && !addressInfoReducer.error) {
      if (addressInfoReducer.data) {
        setTagNameAddressFilterState(
          addressInfoReducer.data.filter(
            (data) => data.tag_name === match.params.tag_name
          )
        );
      } else {
        showAlertMessage(
          "Something went wrong please refresh the page and try again"
        );
      }
    }
  }, [addressInfoReducer, match.params.tag_name]);

  useEffect(() => {
    checkIfAddressFetched();
  }, [checkIfAddressFetched]);

  const handleUpdateAddressClick = () => {
    if (
      addressState &&
      areaState &&
      landmarkState &&
      cityState &&
      stateState &&
      pincodeState &&
      tagnameState
    ) {
      setIsButtonSubimitting(true);
      dispatched(clearUpdateAddressAction());
      dispatched(
        updateAddressAction(
          localStorage.getItem("userPhoneNo"),
          match.params.tag_name,
          addressState,
          areaState,
          cityState,
          pincodeState,
          stateState,
          landmarkState,
          tagnameState
        )
      );
    } else {
      dispatched(showAlertMessage("All the fields are mandatory"));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userPhoneNo") === null) {
      history.push("/");
      return;
    }
    dispatched(clearFetchAddressInfoAction());
    dispatched(fetchAddressInfoAction(localStorage.getItem("userPhoneNo")));
    return function cleanup() {
      dispatched(clearFetchAddressInfoAction());
      dispatched(clearUpdateAddressAction());
    };
  }, [dispatched, history]);

  return (
    <div className="editAddressFormContainer">
      <CurrentPageNameHeader categoryName="Edit Address" />
      <div className="editAddressFormBody">
        {addressInfoReducer.isLoaded ? (
          addressInfoReducer.error ? (
            <Error errorMessage={addressInfoReducer.errorMessage} />
          ) : tagNameAddressFilterState.length ? (
            <>
              <div className="textBoxContainer">
                <TextBoxComponent
                  value={tagNameAddressFilterState[0].address_line_1}
                  regex={addressLine1Regex}
                  name="address"
                  label="Address"
                  disabled={false}
                  type="text"
                  onBlur={handleTextBoxCompoenetOnBlur}
                />
              </div>
              <div className="textBoxContainer">
                <TextBoxComponent
                  value={tagNameAddressFilterState[0].area}
                  regex={addressLine1Regex}
                  name="area"
                  label="Area"
                  disabled={false}
                  type="text"
                  onBlur={handleTextBoxCompoenetOnBlur}
                />
              </div>
              <div className="textBoxContainer">
                <TextBoxComponent
                  value={tagNameAddressFilterState[0].landmark}
                  regex={addressLine1Regex}
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
                  regex={addressLine1Regex}
                  name="city"
                  label="City"
                  disabled={true}
                  type="text"
                  onBlur={handleTextBoxCompoenetOnBlur}
                />
              </div>
              <div className="textBoxContainer">
                <TextBoxComponent
                  value={tagNameAddressFilterState[0].tag_name}
                  regex={addressLine1Regex}
                  name="tagname"
                  label="Address Type (Home, Office etc)"
                  disabled={false}
                  type="text"
                  onBlur={handleTextBoxCompoenetOnBlur}
                />
              </div>
              <div className="updateButtonContainer">
                <button
                  disabled={isButtonSubmitting}
                  onClick={handleUpdateAddressClick}
                  className={`primaryButton w3-block ${
                    isButtonSubmitting && "disabledButton"
                  }`}
                >
                  {isButtonSubmitting ? "Loading..." : "Update Address"}
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

export default EditAddressForm;
