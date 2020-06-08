import React, { Component } from "react";
import "./NavBar.css";
import logo from "../../Assets/tm.png";

export class NavBar extends Component {
  render() {
    return (
      <div className="navBarContainer">
        <div className="navBarItems">
          <div className="w3-row">
            <div className="s4 w3-col barIconSection navBarItem">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className="s4 w3-col logoSection navBarItem">
              <img src={logo} alt="xaprika-logo-png" className="logoImage" />
            </div>
            <div className="s4 w3-col userIconSection navBarItem">
              <i class="fa fa-user-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
