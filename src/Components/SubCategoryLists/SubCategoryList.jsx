import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SubCategoryList.css";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import NoDataFound from "../NoDataFound/NoDataFound";
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
        subCategoryData.error ? (
          <Error errorMessage={subCategoryData.errorMessage} />
        ) : (
          <div className="subCategories w3-row-padding">
            {subCategoryData.data.length ? (
              subCategoryData.data.map((data) => (
                <div
                  key={data.sec_category_id}
                  className="w3-col s4 categoryContainer"
                >
                  <CategoryCard
                    categoryName={data.sec_category_name}
                    categoryImage={data.sec_category_image}
                    categoryId={data.sec_category_id}
                    isPrimaryCategory={false}
                  />
                </div>
              ))
            ) : (
              <NoDataFound />
            )}
          </div>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SubCategoryList;
