import React from "react";
import { useHistory } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const history = useHistory();

  const handleContactUsClick = () => {
    history.push(`/ContactUs`);
  };

  return (
    <div className="errorContainer">
      <div>
        <img
          src="https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/alertImages/error.jpg"
          className="errorImage"
          alt="xaprika error"
        />
      </div>
      <div className="genericText">Facing an issue?</div>
      <div className="genericText">
        <span className="clickHereButton" onClick={handleContactUsClick}>
          Click here
        </span>{" "}
        to contact us we are here to help
      </div>
    </div>
  );
};

export default Error;
