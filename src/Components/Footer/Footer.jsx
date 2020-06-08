import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footerItemsContainer">
          <div className="w3-row footerItems">
            <div className="s4 w3-col footerItemSection">
              <div className="footerItemIcon">
                <i class="fa fa-list-alt" aria-hidden="true"></i>
              </div>
              <div className="footerItemText">Categories</div>
            </div>
            <div className="s4 w3-col footerItemSection">
              <div className="footerItemIcon">
                <i class="fa fa-home" aria-hidden="true"></i>
              </div>
              <div className="footerItemText">Home</div>
            </div>
            <div className="s4 w3-col footerItemSection">
              <div className="footerItemIcon">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
              <div className="footerItemText">Cart</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
