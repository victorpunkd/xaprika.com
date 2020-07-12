import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductsUnderSubCategory.css";
import ProductList from "../ProductList/ProductList";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import { fetchProductDataUnderSecondaryCategory } from "../../Actions/FetchProductData";
import { hideSideBar } from "../../Actions/SideBarVisibleAction";

const ProductsUnderSubCategory = ({ match }) => {
  const dispatched = useDispatch();
  const { productData } = useSelector((state) => state);
  useEffect(() => {
    dispatched(hideSideBar());
    dispatched(
      fetchProductDataUnderSecondaryCategory(match.params.categoryLink)
    );
  }, [match.params.categoryLink, dispatched]);
  return (
    <div className="productsUnderSubCategoryContainer">
      <CurrentPageNameHeader categoryName={match.params.categoryLink} />
      <div className="subCategoryProducts">
        <ProductList products={productData} />
      </div>
    </div>
  );
};

export default ProductsUnderSubCategory;
