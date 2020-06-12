import React from "react";
import "./ProductsUnderCategory.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import SubCategoryList from "../SubCategoryLists/SubCategoryList";
import ProductList from "../ProductList/ProductList";

const ProductsUnderCategory = ({ match }) => {
  return (
    <div className="productsUnderCategoryContainer">
      <CurrentPageNameHeader categoryName={match.params.categoryName} />
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
