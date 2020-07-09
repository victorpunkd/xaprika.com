import { combineReducers } from "redux";
import activePage from "./ActivePageReducer";
import isUerOptionSideBarVisible from "./UserOptionSideBarShowReducer";
import isSideBarVisible from "./SideBarShowReducer";
import isUserOptionSideBarVisible from "./UserOptionSideBarShowReducer";
import bannerData from "./BannerDataReducer";
import primaryCategoryData from "./PrimaryCategoryDataReducer";
import subCategoryData from "./SubCategoriesUnderPrimaryCategoryReducer";
import productData from "./ProductDataReducer";
import cartData from "./CartDataReducer";
import productsUnderCart from "./ProductsInCartReducer";

export default combineReducers({
  activePage,
  isUerOptionSideBarVisible,
  isSideBarVisible,
  isUserOptionSideBarVisible,
  bannerData,
  primaryCategoryData,
  subCategoryData,
  productData,
  cartData,
  productsUnderCart,
});
