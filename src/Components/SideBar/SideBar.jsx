import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import "./SideBar.css";
import { fetchPrimarycategoryData } from "../../Actions/FetchPrimaryCategoryData";
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
              <div style={{ marginLeft: 30 }}>
                {" "}
                <Loader />
              </div>
            )
          ) : (
            "No Data Found"
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
