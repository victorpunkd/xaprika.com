import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import "./SideBar.css";
import { fetchPrimarycategoryData } from "../../Actions/FetchPrimaryCategoryData";

const SideBar = () => {
  const { primaryCategoryData } = useSelector((state) => state);
  const dispatched = useDispatch();
  const [currentPrimaryCategoryId, openPrimarycategorySection] = useState(0);

  useEffect(() => {
    if (!primaryCategoryData.data.length) {
      dispatched(fetchPrimarycategoryData());
    }
  }, [dispatched, primaryCategoryData.data.length]);

  return (
    <div className="sideBarContainer w3-animate-left">
      <div className="primaryCategoriesInSidebar">
        <div className="sideBarHeadingContainer">
          <div className="sideBarHeading">Shop By Categories</div>
        </div>
        <div className="categoryListContainerinSidebBar">
          {primaryCategoryData.isLoaded ? (
            primaryCategoryData.data.map((data) => (
              <div key={data.category_id}>
                <div
                  className="primaryCategoryItemInSideBar w3-row"
                  onClick={() => openPrimarycategorySection(data.category_id)}
                >
                  <div className="w3-col s10 primaryCategoryNameInSideBar">
                    {data.category_name}
                  </div>
                  <div className="w3-col s2">
                    <i
                      className={`${
                        currentPrimaryCategoryId === data.category_id
                          ? "primaryTextColor fa fa-angle-up"
                          : "fa fa-angle-down"
                      }`}
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div
                  className={`w3-animate-left ${
                    currentPrimaryCategoryId !== data.category_id && "w3-hide"
                  } subCategoryListInSideBar`}
                >
                  <div className="subCategoryItem">Milk</div>
                  <div className="subCategoryItem">Breads</div>
                  <div className="subCategoryItem">Biscuits</div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ marginLeft: 30 }}>
              {" "}
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
