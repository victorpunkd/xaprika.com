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
import alertMessage from "./AlertMessageReducer";
import isPhoneNoExist from "./IsPhoneNoExistReducer";
import isOTPSent from "./IsOTPSentReducer";
import isOTPMatching from "./CheckOTPReducer";
import checkPasswordReducer from "./CheckPasswordReducer";

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
  alertMessage,
  isPhoneNoExist,
  isOTPSent,
  isOTPMatching,
  checkPasswordReducer,
});
