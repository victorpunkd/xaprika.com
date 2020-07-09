import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SubCategoryList.css";
import Loader from "../Loader/Loader";
import CategoryCard from "../CategoryCard/CategoryCard";
import { fetchSecondaryCategoryData } from "../../Actions/FetchSecondaryCategoryData";

const SubCategoryList = (props) => {
  const dispatched = useDispatch();
  const { subCategoryData } = useSelector((state) => state);
  useEffect(() => {
    dispatched(fetchSecondaryCategoryData(props.categoryLink));
  }, [props.categoryLink, dispatched]);

  return (
    <div className="subCategoryListContainer">
      <div className="subCategoryListHeading">Shop by Sub Category</div>
      {subCategoryData.isLoaded ? (
        <div className="subCategories w3-row-padding">
          {subCategoryData.data.map((data) => (
            <div className="w3-col s4 categoryContainer">
              <CategoryCard
                key={data.sec_category_id}
                categoryName={data.sec_category_name}
                categoryImage={data.sec_category_image}
                categoryId={data.sec_category_id}
                isPrimaryCategory={false}
              />
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SubCategoryList;
