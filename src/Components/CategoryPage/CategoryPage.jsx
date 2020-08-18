import React from "react";
import "./CategoryPage.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import PrimaryCategories from "../PrimaryCategories/PrimaryCategories";

const CategoryPage = () => {
  return (
    <div className="categoryPageContainer">
      <CurrentPageNameHeader categoryName="Categories" />
      <div className="categoryPageBody">
        <div className="primaryCategories">
          <PrimaryCategories />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
