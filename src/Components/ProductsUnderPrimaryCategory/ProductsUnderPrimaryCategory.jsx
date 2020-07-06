import React from "react";
import "./ProductsUnderPrimaryCategory.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import SubCategoryList from "../SubCategoryLists/SubCategoryList";
import ProductList from "../ProductList/ProductList";

const ProductsUnderPrimaryCategory = ({ match }) => {
  return (
    <div className="productsUnderCategoryContainer">
      <CurrentPageNameHeader categoryName={match.params.categoryLink} />
      <div className="subCategories">
        <SubCategoryList categoryLink={match.params.categoryLink} />
      </div>
      <div className="primaryCategoryProducts">
        <ProductList categoryLink={match.params.categoryLink} />
      </div>
    </div>
  );
};

export default ProductsUnderPrimaryCategory;
