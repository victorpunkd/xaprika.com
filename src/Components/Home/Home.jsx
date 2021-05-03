import React from "react";
import "./Home.css";
import SearchBoxComponent from "../SearchBoxComponent/SearchBoxComponent";
import Banner from "../Banner/Banner";
//import BannerNonSliding from "../BannerNonSliding/BannerNonSliding";
import PrimaryCategories from "../PrimaryCategories/PrimaryCategories";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="primaryText">Why do you need to go out ?</div>
      <div className="secondaryText">
        While Xaprika is working hard to take care of your everyday needs, you
        can use that time to do something else instead. Like, pampering yourself
        - maybe{" "}
        <span role="img" aria-label="winking">
          &#128522;
        </span>
      </div>
      <div className="searchBox">
        <SearchBoxComponent />
      </div>
      <div className="banner">
        <Banner />
      </div>
      {/*<div className="banner">
        <BannerNonSliding
          key={1}
          image={
            "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/saleBanner/xap_special_posterr-banner.jpg"
          }
          name="xap_special_poster"
          link={`/xaprika-specials`}
          clickable={true}
        />
        </div>*/}
      <div className="primaryCategories">
        <PrimaryCategories />
      </div>
    </div>
  );
};

export default Home;
