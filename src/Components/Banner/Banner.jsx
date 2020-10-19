import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Banner.css";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { fetchBannerData } from "../../Actions/FetchBannerData";
import NoDataFound from "../NoDataFound/NoDataFound";

const Banner = () => {
  const dispatched = useDispatch();
  const { bannerData } = useSelector((state) => state);
  const [currentBannerImageState, setCurrentBannerImageState] = useState(0);

  const startRollingImages = useCallback(() => {
    setInterval(() => {
      setCurrentBannerImageState((currentBannerImageState) =>
        currentBannerImageState === bannerData.data.length - 1
          ? 0
          : currentBannerImageState + 1
      );
    }, 4000);
  }, [bannerData.data.length]);

  const changeBannerOnInterval = useCallback(() => {
    if (bannerData.isLoaded && !bannerData.error && bannerData.data.length) {
      startRollingImages();
    }
  }, [bannerData, startRollingImages]);

  useEffect(() => {
    changeBannerOnInterval();
  }, [changeBannerOnInterval]);

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
          {bannerData.error ? (
            <Error errorMessage={bannerData.errorMessage} />
          ) : bannerData.data.length ? (
            <img
              key={bannerData.data[currentBannerImageState].banner_id}
              src={bannerData.data[currentBannerImageState].banner_image}
              alt={bannerData.data[currentBannerImageState].banner_description}
              className="bannerImage w3-animate-right"
            />
          ) : (
            <NoDataFound />
          )}
        </div>
      </div>
    );
  }
};

export default Banner;
