import React from "react";
import "./ProductsUnderCategory.css";
import SubCategoryList from "../SubCategoryLists/SubCategoryList";
import ProductList from "../ProductList/ProductList";

const ProductsUnderCategory = ({ match }) => {
  return (
    <div className="productsUnderCategoryContainer">
      <div className="backButtonContainer">
        <div className="backButton">
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>{" "}
          {match.params.categoryName}
        </div>
      </div>
      <div className="subCategories">
        <SubCategoryList />
      </div>
      <div className="primaryCategoryProducts">
        <ProductList />
      </div>
    </div>
  );
};

export default ProductsUnderCategory;
