import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./UserOptionSidebar.css";
import { hideUserOptionSideBar } from "../../Actions/UserOptionSideBarVisibleAction";
import { showAlertMessage } from "../../Actions/AlertMessageAction";

const UserOptionSideBar = () => {
  const dispatched = useDispatch();
  const handleLogOutClicked = () => {
    localStorage.removeItem("userPhoneNo");
    dispatched(showAlertMessage("You have successfully logged out"));
  };
  return (
    <div className="userOptionSideBarContainer w3-animate-opacity">
      <div className="userOptionSideBarHeadingContainer">
        <div className="userOptionSideBarHeading">Manage Your Account</div>
      </div>

      <div className="categoryListContainerinSidebBar">
        <Link to="/UserInformation">
          <div
            className="userOptionItemInSideBar w3-row"
            onClick={() => dispatched(hideUserOptionSideBar())}
          >
            <div className="s2 w3-col">
              <i className="fa fa-cog"></i>
            </div>
            <div className="s10 w3-col">Manage Account</div>
          </div>
        </Link>
        <Link to="/AddressManagement">
          <div
            className="userOptionItemInSideBar w3-row"
            onClick={() => dispatched(hideUserOptionSideBar())}
          >
            <div className="s2 w3-col">
              <i className="fa fa-address-book"></i>
            </div>
            <div className="s10 w3-col">Manage Address</div>
          </div>
        </Link>
        <Link to="/OrderHistory">
          <div
            className="userOptionItemInSideBar w3-row"
            onClick={() => dispatched(hideUserOptionSideBar())}
          >
            <div className="s2 w3-col">
              <i className="fa fa-history"></i>
            </div>
            <div className="s10 w3-col">Order History</div>
          </div>
        </Link>
        <Link to="/">
          <div
            className="userOptionItemInSideBar w3-row"
            style={{ color: "red" }}
            onClick={() => {
              handleLogOutClicked();
              dispatched(hideUserOptionSideBar());
            }}
          >
            <div className="s2 w3-col">
              <i className="fa fa-sign-out"></i>
            </div>
            <div className="s10 w3-col">Log Out</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserOptionSideBar;
