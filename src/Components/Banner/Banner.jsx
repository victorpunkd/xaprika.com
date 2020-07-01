import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Banner.css";
import Loader from "../Loader/Loader";
import { fetchBannerData } from "../../Actions/FetchBannerData";

const Banner = () => {
  const dispatched = useDispatch();
  const { bannerData } = useSelector((state) => state);
  useEffect(() => {
    dispatched(fetchBannerData());
  }, [dispatched]);

  if (!bannerData.isLoaded) {
    return (
      <div className="loadingBanner">
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="bannerConatiner w3-card w3-animate-zoom">
        <div>
          <img
            src={bannerData.data[0].banner_image}
            alt={bannerData.data[0].banner_description}
            className="bannerImage"
          />
        </div>
      </div>
    );
  }
};

export default Banner;
