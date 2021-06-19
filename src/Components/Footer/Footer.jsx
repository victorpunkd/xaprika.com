import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./Footer.css";
import { hideSideBar } from "../../Actions/SideBarVisibleAction";
import { hideUserOptionSideBar } from "../../Actions/UserOptionSideBarVisibleAction";

const Footer = () => {
  const { cartData } = useSelector((state) => state);
  const dispatched = useDispatch();

  return (
    <div className="footerContainer">
      <div className="footerItemsContainer">
        <div
          className="w3-row footerItems"
          onClick={() => {
            dispatched(hideSideBar());
            dispatched(hideUserOptionSideBar());
          }}
        >
          <Link to="/Categories">
            <div className="s3 w3-col footerItemSection">
              <div className="footerItemIcon">
                <i className="fa fa-list-alt" aria-hidden="true"></i>
              </div>
              <div className="footerItemText">Categories</div>
            </div>
          </Link>
          <Link to="/">
            <div className="s3 w3-col footerItemSection">
              <div className="footerItemIcon">
                <i className="fa fa-home" aria-hidden="true"></i>
              </div>
              <div className="footerItemText">Home</div>
            </div>
          </Link>
          <Link to="/ContactUs">
            <div className="s3 w3-col footerItemSection">
              <div className="footerItemIcon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="footerItemText">Contact</div>
            </div>
          </Link>
          <Link to="/Cart">
            <div className="s3 w3-col footerItemSection">
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
