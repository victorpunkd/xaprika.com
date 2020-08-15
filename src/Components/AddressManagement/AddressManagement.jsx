import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./AddressManagement.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import AddressCard from "../AddressCard/AddressCard";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import NoDataFound from "../NoDataFound/NoDataFound";
import {
  fetchAddressInfoAction,
  clearFetchAddressInfoAction,
} from "../../Actions/FetchAddressInfo";

const AddressManagement = () => {
  const history = useHistory();
  const dispatched = useDispatch();
  const { addressInfoReducer } = useSelector((state) => state);

  const addAddressClick = () => {
    history.push("/Add-Address");
  };

  useEffect(() => {
    if (localStorage.getItem("userPhoneNo") === null) {
      history.pushState("/");
      return;
    }
    dispatched(fetchAddressInfoAction(localStorage.getItem("userPhoneNo")));
    return function cleanup() {
      dispatched(clearFetchAddressInfoAction());
    };
  }, [history, dispatched]);

  return (
    <div className="addressManagementContainer ">
      <CurrentPageNameHeader categoryName="Manage Address" />
      <div className="manageAddressBody">
        <button className="w3-block primaryButton" onClick={addAddressClick}>
          Add Address
        </button>
        {addressInfoReducer.isLoaded ? (
          addressInfoReducer.error ? (
            <Error errorMessage={addressInfoReducer.errorMessage} />
          ) : addressInfoReducer.data.length ? (
            addressInfoReducer.data.map((data) => (
              <AddressCard key={data.tag_name} data={data} />
            ))
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

export default AddressManagement;
