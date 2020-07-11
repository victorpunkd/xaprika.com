import React from "react";
import "./NoDataFound.css";

const NoDataFound = (props) => {
  return (
    <div className="noDataFoundContainer">
      <div>
        <img
          src="https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/alertImages/no_data.jpg"
          className="noDataFoundImage"
          alt="xaprika no data found"
        />
      </div>
    </div>
  );
};

export default NoDataFound;
