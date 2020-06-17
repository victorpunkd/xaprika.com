import React from "react";
import "./UserOptionSidebar.css";

const UserOptionSideBar = () => {
  return (
    <div className="userOptionSideBarContainer w3-animate-right">
      <div className="userOptionSideBarHeadingContainer">
        <div className="userOptionSideBarHeading">Manage Your Account</div>
      </div>
      <div className="categoryListContainerinSidebBar">
        <div className="userOptionItemInSideBar w3-row">
          <div className="s2 w3-col">
            <i class="fa fa-cog"></i>
          </div>
          <div className="s10 w3-col">Manage Account</div>
        </div>
        <div className="userOptionItemInSideBar w3-row">
          <div className="s2 w3-col">
            <i className="fa fa-address-book"></i>
          </div>
          <div className="s10 w3-col">Manage Address</div>
        </div>
        <div className="userOptionItemInSideBar w3-row">
          <div className="s2 w3-col">
            <i className="fa fa-history"></i>
          </div>
          <div className="s10 w3-col">Order History</div>
        </div>
        <div
          className="userOptionItemInSideBar w3-row"
          style={{ color: "red" }}
        >
          <div className="s2 w3-col">
            <i className="fa fa-sign-out"></i>
          </div>
          <div className="s10 w3-col">Log Out</div>
        </div>
      </div>
    </div>
  );
};

export default UserOptionSideBar;
