import React from "react";
import "./Error.css";

const Error = (props) => {
  return (
    <div className="errorContainer">
      <div>
        <img
          src="https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/alertImages/error.jpg"
          className="errorImage"
          alt="xaprika error"
        />
      </div>
    </div>
  );
};

export default Error;
