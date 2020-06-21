import React from "react";
import "./AddressManagement.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";

const AddressManagement = () => {
  return (
    <div className="addressManagementContainer ">
      <CurrentPageNameHeader categoryName="Manage Address" />
      <div className="manageAddressBody">
        <button className="w3-block primaryButton">Add Address</button>
        <div className="addressCard w3-card">
          <div className="addressInfo">
            4B, 4th Floor, Ishani 7, Bablatala More, Opposite of Gopalpur
            Ramkumar School, Rajarhat Kolkata - 700136
          </div>
          <div className="addressCardControls">
            <div className="w3-row">
              <div className="s6 w3-col" style={{ paddingRight: 5 }}>
                <button className="secondaryButton w3-block">Edit</button>
              </div>
              <div className="s6 w3-col" style={{ paddingLeft: 5 }}>
                <button className="secondaryButton w3-block w3-text-red">
                  Delete
                </button>
              </div>
            </div>
            <button
              className="primaryButtonSmall w3-block"
              style={{ marginTop: 10 }}
            >
              Make Address Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressManagement;
