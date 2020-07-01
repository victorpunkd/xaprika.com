import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./PrimaryCategories.css";
import Loader from "../Loader/Loader";
import CategoryCard from "../CategoryCard/CategoryCard";
import { fetchPrimarycategoryData } from "../../Actions/FetchPrimaryCategoryData";

const PrimaryCategories = () => {
  const dispatched = useDispatch();
  const { primaryCategoryData } = useSelector((state) => state);
  useEffect(() => {
    dispatched(fetchPrimarycategoryData());
  }, [dispatched]);

  if (!primaryCategoryData.isLoaded) {
    return <Loader />;
  } else {
    return (
      <div className="primaryCategoryContanier w3-row-padding">
        <div className="primaryCategoryHeading">Shop by Category</div>
        {primaryCategoryData.data.map((data) => (
          <div className="s6 w3-col categoryContainer">
            <CategoryCard
              key={data.category_id}
              categoryName={data.category_name}
              categoryImage={data.category_image}
              categoryId={data.category_id}
              isPrimaryCategory={true}
            />
          </div>
        ))}
      </div>
    );
  }
};

export default PrimaryCategories;
