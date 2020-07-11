import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./PrimaryCategories.css";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import NoDataFound from "../NoDataFound/NoDataFound";
import CategoryCard from "../CategoryCard/CategoryCard";
import { fetchPrimarycategoryData } from "../../Actions/FetchPrimaryCategoryData";

const PrimaryCategories = () => {
  const dispatched = useDispatch();
  const { primaryCategoryData } = useSelector((state) => state);
  useEffect(() => {
    dispatched(fetchPrimarycategoryData());
  }, [dispatched]);

  return (
    <div className="primaryCategoryContanier w3-row-padding">
      <div className="primaryCategoryHeading">Shop by Category</div>
      {primaryCategoryData.isLoaded ? (
        primaryCategoryData.error ? (
          <Error errorMessage={primaryCategoryData.errorMessage} />
        ) : primaryCategoryData.data.length ? (
          primaryCategoryData.data.map((data) => (
            <div key={data.category_id} className="s6 w3-col categoryContainer">
              <CategoryCard
                categoryName={data.category_name}
                categoryImage={data.category_image}
                categoryId={data.category_id}
                categoryLink={data.category_link}
                isPrimaryCategory={true}
              />
            </div>
          ))
        ) : (
          <NoDataFound />
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PrimaryCategories;
