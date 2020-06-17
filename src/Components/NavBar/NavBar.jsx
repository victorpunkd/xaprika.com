import React from "react";
import { useDispatch } from "react-redux";
import "./NavBar.css";
import logo from "../../Assets/tm.png";
import { toggleSideBarVisibility } from "../../Actions/SideBarVisibleAction";
import { hideSideBar } from "../../Actions/SideBarVisibleAction";
import { toggleUserOptionSideBarVisibility } from "../../Actions/UserOptionSideBarVisibleAction";
import { hideUserOptionSideBar } from "../../Actions/UserOptionSideBarVisibleAction";

const NavBar = () => {
  const dispatched = useDispatch();
  return (
    <div className="navBarContainer">
      <div className="navBarItems">
        <div className="w3-row">
          <div className="s4 w3-col w3-third barIconSection navBarItem">
            <i
              className="fa fa-bars"
              aria-hidden="true"
              onClick={() => {
                dispatched(hideUserOptionSideBar());
                dispatched(toggleSideBarVisibility());
              }}
            ></i>
          </div>
          <div className="s4 w3-col w3-third logoSection navBarItem">
            <img src={logo} alt="xaprika-logo-png" className="logoImage" />
          </div>
          <div className="s4 w3-col w3-third userIconSection navBarItem">
            <i
              className="fa fa-user-circle"
              aria-hidden="true"
              onClick={() => {
                dispatched(hideSideBar());
                dispatched(toggleUserOptionSideBarVisibility());
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
