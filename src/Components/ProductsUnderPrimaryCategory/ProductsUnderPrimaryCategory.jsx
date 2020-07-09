import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductsUnderPrimaryCategory.css";
import Loader from "../Loader/Loader";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import SubCategoryList from "../SubCategoryLists/SubCategoryList";
import ProductList from "../ProductList/ProductList";
import { fetchProductData } from "../../Actions/FetchProductData";

const ProductsUnderPrimaryCategory = ({ match }) => {
  const dispatched = useDispatch();
  const { productData } = useSelector((state) => state);
  useEffect(() => {
    dispatched(fetchProductData(match.params.categoryLink));
  }, [match.params.categoryLink, dispatched]);
  return (
    <div className="productsUnderCategoryContainer">
      <CurrentPageNameHeader categoryName={match.params.categoryLink} />
      <div className="subCategories">
        <SubCategoryList categoryLink={match.params.categoryLink} />
      </div>
      <div className="primaryCategoryProducts">
        {productData.isLoaded ? (
          <ProductList products={productData.data} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ProductsUnderPrimaryCategory;
