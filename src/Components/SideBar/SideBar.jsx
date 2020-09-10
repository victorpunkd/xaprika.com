import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import "./SideBar.css";
import { fetchPrimarycategoryData } from "../../Actions/FetchPrimaryCategoryData";
import { clearSecondaryCategoryData } from "../../Actions/FetchSecondaryCategoryData";
import { fetchSecondaryCategoryData } from "../../Actions/FetchSecondaryCategoryData";

const SideBar = () => {
  const { primaryCategoryData } = useSelector((state) => state);
  const dispatched = useDispatch();
  const [currentPrimaryCategoryLink, openPrimarycategorySection] = useState("");

  useEffect(() => {
    if (!primaryCategoryData.data.length) {
      dispatched(fetchPrimarycategoryData());
    }
  }, [dispatched, primaryCategoryData.data.length]);

  const handlePrimaryCategoryClick = (category_id, category_link) => {
    openPrimarycategorySection(category_link);
    dispatched(clearSecondaryCategoryData());
    dispatched(fetchSecondaryCategoryData(category_link));
  };

  const { subCategoryData } = useSelector((state) => state);

  return (
    <div className="sideBarContainer w3-animate-left">
      <div className="primaryCategoriesInSidebar">
        <div className="sideBarHeadingContainer">
          <div className="sideBarHeading">Shop By Categories</div>
        </div>
        <div className="categoryListContainerinSidebBar">
          {primaryCategoryData.isLoaded ? (
            primaryCategoryData.error ? (
              <Error errorMessage={primaryCategoryData.errorMessage} />
            ) : primaryCategoryData.data.length ? (
              primaryCategoryData.data.map((data) => (
                <div key={data.category_id}>
                  <div
                    className="primaryCategoryItemInSideBar w3-row"
                    onClick={() =>
                      handlePrimaryCategoryClick(
                        data.category_id,
                        data.category_link
                      )
                    }
                  >
                    <div className="w3-col s10 primaryCategoryNameInSideBar">
                      {data.category_name}
                    </div>
                    <div className="w3-col s2">
                      <i
                        className={`${
                          currentPrimaryCategoryLink === data.category_link
                            ? "primaryTextColor fa fa-angle-up"
                            : "fa fa-angle-down"
                        }`}
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <div
                    className={`w3-animate-left ${
                      currentPrimaryCategoryLink !== data.category_link &&
                      "w3-hide"
                    } subCategoryListInSideBar`}
                  >
                    {subCategoryData.isLoaded ? (
                      subCategoryData.error ? (
                        "Sorry we faced some error"
                      ) : subCategoryData.data.length ? (
                        subCategoryData.data.map((data) => (
                          <Link
                            style={{ textDecoration: "none" }}
                            key={data.sec_category_id}
                            to={`/Products-SubCategory/${currentPrimaryCategoryLink}/${data.sec_category_link}`}
                          >
                            <div className="subCategoryItem">
                              {data.sec_category_name}
                            </div>
                          </Link>
                        ))
                      ) : (
                        "No data found"
                      )
                    ) : (
                      <Loader />
                    )}
                  </div>
                </div>
              ))
            ) : (
              "No data found"
            )
          ) : (
            <div style={{ marginLeft: 30 }}>
              {" "}
              <Loader />
            </div>
          )}
          <div className="staticSideBarElemenets">
            <div className="staticSideBarElemenetItem w3-row">
              <Link style={{ textDecoration: "none" }} to={`/ContactUs`}>
                <div className="primaryCategoryNameInSideBar">Contact Us</div>
              </Link>
            </div>
            <div className="staticSideBarElemenetItem w3-row">
              <Link style={{ textDecoration: "none" }} to={`/AboutUs`}>
                <div className="primaryCategoryNameInSideBar">About Us</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
