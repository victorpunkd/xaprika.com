import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./AboutUs.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import { hideSideBar } from "../../Actions/SideBarVisibleAction";

const AboutUs = () => {
  const dispatched = useDispatch();
  useEffect(() => {
    dispatched(hideSideBar());
  }, [dispatched]);
  return (
    <div className="aboutUsContainer">
      <CurrentPageNameHeader categoryName="About Us" />
      <div className="aboutUsBody">
        <div className="contactItems">
          <div>
            <img
              src="https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/websiteAssets/tm.png"
              className="logoInAboutUs"
              alt="Xaprika-Logo"
            />
          </div>
          <div className="aboutUsInfo">
            Xaprika is the one-stop online destination in Siliguri for all your
            daily needs. Conceptualized by three friends, Xaprika will amaze you
            with an unique shopping experience that you are bound to fall in
            love with. So stop looking any further, and start Xapping!!
          </div>
          <div className="version">Version - 1.3.1</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
