import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Footer.css";

const Footer = () => {
  const { cartData } = useSelector((state) => state);

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
              <div className="footerItemText">Cart ({cartData.length})</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
