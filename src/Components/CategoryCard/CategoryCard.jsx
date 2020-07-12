import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = (props) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={
        props.isPrimaryCategory
          ? `/Products-Category/${props.categoryLink}`
          : `/Products-SubCategory/${props.categoryLink}/${props.subCategoryLink}`
      }
    >
      <div className="categoryCard w3-card">
        <div className="categoryImageContainer">
          <img
            src={props.categoryImage}
            alt={`xaprika-${props.categoryName}-flat-illustartion`}
            className={
              props.isPrimaryCategory
                ? "primaryCategoryImage"
                : "secondaryCategoryImage"
            }
          />
        </div>
        <div className="categoryName">{props.categoryName}</div>
      </div>
    </Link>
  );
};

export default CategoryCard;
