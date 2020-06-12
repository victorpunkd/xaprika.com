import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footerItemsContainer">
          <div className="w3-row footerItems">
            <div className="s4 w3-col footerItemSection">
              <div className="footerItemIcon">
                <i className="fa fa-list-alt" aria-hidden="true"></i>
              </div>
              <div className="footerItemText">Categories</div>
            </div>
            <Link to="/">
              <div className="s4 w3-col footerItemSection">
                <div className="footerItemIcon">
                  <i className="fa fa-home" aria-hidden="true"></i>
                </div>
                <div className="footerItemText">Home</div>
              </div>
            </Link>
            <Link to="/Cart">
              <div className="s4 w3-col footerItemSection">
                <div className="footerItemIcon">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
                <div className="footerItemText">Cart</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
