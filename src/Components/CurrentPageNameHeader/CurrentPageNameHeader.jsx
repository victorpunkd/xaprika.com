import React from "react";
import "./CurrentPageNameHeader.css";

const CurrentPageNameHeader = (props) => {
  return (
    <div className="currentPageNameHeaderContainer">
      <div className="backButton">
        <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>{" "}
        {props.categoryName}
      </div>
    </div>
  );
};

export default CurrentPageNameHeader;
