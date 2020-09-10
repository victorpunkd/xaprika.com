import React from "react";
import { useHistory } from "react-router-dom";
import "./Error404Page.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";

const Error404Page = () => {
  const history = useHistory();
  const handleGoHomeClick = () => {
    history.push("/");
  };
  return (
    <div className="Error404PageContainer">
      <CurrentPageNameHeader categoryName="404" />
      <div className="Error404PageBody">
        <div className="Error404ImageDiv">
          <img
            className="Error404Image"
            alt="xaprika-404-error"
            src="https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/alertImages/404Error.jpg"
          />
        </div>
        <button
          onClick={handleGoHomeClick}
          className={`primaryButton w3-block`}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error404Page;
