import React from "react";
import { useHistory } from "react-router-dom";
import "./BannerNonSliding.css";

const BannerNonSliding = (props) => {
  const history = useHistory();
  const handleBannerOnClick = () => {
    history.push(`${props.link}`);
  };
  return (
    <div className="nonSlidingBannerConatiner w3-card w3-animate-zoom">
      <div
        className="nonSlidingBannerImageConatiner"
        onClick={props.clickable ? handleBannerOnClick : ""}
      >
        <img
          src={props.image}
          alt={`xaprika-specials-${props.name}`}
          className="nonSlidingBannerImage"
        />
      </div>
    </div>
  );
};

export default BannerNonSliding;
