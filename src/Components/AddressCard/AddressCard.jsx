import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./AddressCard.css";
import {
  deleteAddressAction,
  clearDeleteAdressAction,
} from "../../Actions/DeleteAddress";
import {
  makeAddressDefaultAction,
  clearMakeAddressDefaultAction,
} from "../../Actions/MakeAddressDefault";
import {
  fetchAddressInfoAction,
  clearFetchAddressInfoAction,
} from "../../Actions/FetchAddressInfo";
import { showAlertMessage } from "../../Actions/AlertMessageAction";

const AddressCard = (props) => {
  const dispatched = useDispatch();
  const { deleteAdressReducer, makeAddressDefaultReducer } = useSelector(
    (state) => state
  );
  const history = useHistory();

  const checkDefaultAddressStatus = useCallback(() => {
    if (makeAddressDefaultReducer.isLoaded && !makeAddressDefaultAction.error) {
      if (makeAddressDefaultReducer.data) {
        if (makeAddressDefaultReducer.data.code === 1) {
          dispatched(clearFetchAddressInfoAction());
          dispatched(
            fetchAddressInfoAction(localStorage.getItem("userPhoneNo"))
          );
          dispatched(clearMakeAddressDefaultAction());
          if (sessionStorage.getItem("changeAddressFromCheckout") !== null) {
            sessionStorage.removeItem("changeAddressFromCheckout");
            history.push("/Checkout");
          }
        } else {
          dispatched(
            showAlertMessage(
              "Something went wrong, please refresh the page and try again"
            )
          );
        }
      }
    }
  }, [makeAddressDefaultReducer, dispatched, history]);

  useEffect(() => {
    checkDefaultAddressStatus();
  }, [checkDefaultAddressStatus]);

  const handleMakeAddressDefaultClick = () => {
    if (props.data.isDefault) return;
    dispatched(clearMakeAddressDefaultAction());
    dispatched(
      makeAddressDefaultAction(
        localStorage.getItem("userPhoneNo"),
        props.data.tag_name
      )
    );
  };

  const checkAddressDeletionStatus = useCallback(() => {
    if (deleteAdressReducer.isLoaded && !deleteAdressReducer.error) {
      if (deleteAdressReducer) {
        if (deleteAdressReducer.data.code === 1) {
          dispatched(clearFetchAddressInfoAction());
          dispatched(
            fetchAddressInfoAction(localStorage.getItem("userPhoneNo"))
          );
          dispatched(clearDeleteAdressAction());
        }
      } else {
        dispatched(
          showAlertMessage(
            "Something went wrong, please refresh the page and try again"
          )
        );
      }
    }
  }, [deleteAdressReducer, dispatched]);

  useEffect(() => {
    checkAddressDeletionStatus();
  }, [checkAddressDeletionStatus]);

  const handleDeleteAddressClick = () => {
    dispatched(
      deleteAddressAction(
        localStorage.getItem("userPhoneNo"),
        props.data.tag_name
      )
    );
  };

  const handleAddressEditClick = () => {
    history.push(`/Edit-Address/${props.data.tag_name}`);
  };

  return (
    <div className="addressCard w3-card">
      <div className="addressInfo">
        <b>{props.data.tag_name} - </b>
        {props.data.address_line_1}, {props.data.area}, {props.data.landmark},{" "}
        {props.data.city}, {props.data.pin_code}, {props.data.state}
      </div>
      <div className="addressCardControls">
        <div className="w3-row">
          <div className="s6 w3-col" style={{ paddingRight: 5 }}>
            <button
              className="secondaryButton w3-block"
              onClick={handleAddressEditClick}
            >
              Edit
            </button>
          </div>
          <div className="s6 w3-col" style={{ paddingLeft: 5 }}>
            <button
              onClick={handleDeleteAddressClick}
              className="secondaryButton w3-block w3-text-red"
            >
              Delete
            </button>
          </div>
        </div>
        <button
          className={`primaryButtonSmall w3-block ${
            props.data.isDefault && "disabledButton"
          }`}
          style={{ marginTop: 10 }}
          onClick={handleMakeAddressDefaultClick}
        >
          Make Address Default
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
