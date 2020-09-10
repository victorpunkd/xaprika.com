import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./ContactUs.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import { hideSideBar } from "../../Actions/SideBarVisibleAction";

const ContactUs = () => {
  const dispatched = useDispatch();
  useEffect(() => {
    dispatched(hideSideBar());
  }, [dispatched]);
  return (
    <div className="contactUsContainer">
      <CurrentPageNameHeader categoryName="Contact Us" />
      <div className="contactUsBody">
        <div className="contactItems">
          <div className="contactUsInfo">
            <i className="fa fa-whatsapp iconColor" aria-hidden="true"></i>{" "}
            98835 09323
          </div>
          <div className="contactUsInfo">
            <i className="fa fa-envelope iconColor" aria-hidden="true"></i>{" "}
            help@xaprika.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
