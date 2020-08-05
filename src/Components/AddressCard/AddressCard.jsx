import React from "react";
import "./AddressCard.css";

const AddressCard = (props) => {
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
  );
};

export default AddressCard;
