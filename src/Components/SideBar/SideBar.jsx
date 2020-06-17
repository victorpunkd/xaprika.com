import React, { useState } from "react";
import "./SideBar.css";

const SideBar = () => {
  const [currentPrimaryCategoryId, openPrimarycategorySection] = useState(0);
  return (
    <div className="sideBarContainer w3-animate-left">
      <div className="primaryCategoriesInSidebar">
        <div className="sideBarHeadingContainer">
          <div className="sideBarHeading">Shop By Categories</div>
        </div>
        <div className="categoryListContainerinSidebBar">
          <div
            className="primaryCategoryItemInSideBar w3-row"
            onClick={() => openPrimarycategorySection(1)}
          >
            <div className="w3-col s10">Breakfast</div>
            <div className="w3-col s2">
              <i
                class={`${
                  currentPrimaryCategoryId === 1
                    ? "primaryTextColor fa fa-angle-up"
                    : "fa fa-angle-down"
                }`}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div
            className={`w3-animate-left ${
              currentPrimaryCategoryId !== 1 && "w3-hide"
            } subCategoryListInSideBar`}
          >
            <div className="subCategoryItem">Milk</div>
            <div className="subCategoryItem">Breads</div>
            <div className="subCategoryItem">Biscuits</div>
          </div>
          <div
            className="primaryCategoryItemInSideBar w3-row"
            onClick={() => openPrimarycategorySection(2)}
          >
            <div className="w3-col s10">Fish & Meat</div>
            <div className="w3-col s2">
              <i
                class={`${
                  currentPrimaryCategoryId === 2
                    ? "fa fa-angle-up primaryTextColor"
                    : "fa fa-angle-down"
                }`}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div
            className={`w3-animate-left ${
              currentPrimaryCategoryId !== 2 && "w3-hide"
            } subCategoryListInSideBar`}
          >
            <div className="subCategoryItem">Chicken</div>
            <div className="subCategoryItem">Mutton</div>
            <div className="subCategoryItem">Fish</div>
            <div className="subCategoryItem">Eggs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
