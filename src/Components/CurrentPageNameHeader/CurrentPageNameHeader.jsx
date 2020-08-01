import React from "react";
import { useHistory } from "react-router";
import "./CurrentPageNameHeader.css";

const CurrentPageNameHeader = (props) => {
  let history = useHistory();
  return (
    <div className="currentPageNameHeaderContainer">
      <div className="backButton" onClick={history.goBack}>
        <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>{" "}
        {props.categoryName}
      </div>
    </div>
  );
};

export default CurrentPageNameHeader;
