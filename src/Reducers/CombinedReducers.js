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
import isInsertUserSuccessfullReducer from "./InsertUserDataReducer";
import finalCheckoutCalculationReducer from "./FinalCheckoutCalculationReducer";
import deliveryAddressReducer from "./DeliveryAddressReducer";
import confirmOrderReducer from "./ConfirmOrderReducer";
import ordersInfoReducer from "./OrdersInfoReducer";
import addressInfoReducer from "./AddressInfoReducer";
import addAdressReducer from "./AddAddressReducer";
import deleteAdressReducer from "./DeleteAddressReducer";
import makeAddressDefaultReducer from "./MakeAddressDefaultReducer";
import updateAddressReducer from "./UpdateAddressReducer";
import userInformationReducer from "./UserInformationReducer";
import updateUserInformationReducer from "./UpdateUserInformationReducer";
import productsListForSearch from "./ProductListForSearchReducer";
import selectiveProductsReducer from "./SelectiveProductsReducer";
import expectedDeliveryDateReducer from "./ExpectedDeliveryDateReducer";
import couponValidationReducer from "./CouponValidationReducer";
import isApplyCoupoModalVisibleReducer from "./ShowHideApplyCouponModalReducer";
import appliedCouponCodeReducer from "./AppliedCouponCode";
import xapSpecialsCompanyInfoReducer from "./XapSpecialsCompanyInfoReducers";
import xapSpecialsCompanyBrandingReducer from "./XapSpecialsCompanyBrandingReducers";
import xapSpecialsCompanyProductsReducer from "./XapSpecialsCompanyProductsReducers";
import groupOfProductsReducer from "./GroupOfProductsReducer";
import cancelOrderReducer from "./CancelOrderReducer";
import orderDetailsReducer from "./OrderDetailsReducer";
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
  isInsertUserSuccessfullReducer,
  finalCheckoutCalculationReducer,
  deliveryAddressReducer,
  confirmOrderReducer,
  ordersInfoReducer,
  addressInfoReducer,
  addAdressReducer,
  deleteAdressReducer,
  makeAddressDefaultReducer,
  updateAddressReducer,
  userInformationReducer,
  updateUserInformationReducer,
  productsListForSearch,
  selectiveProductsReducer,
  expectedDeliveryDateReducer,
  couponValidationReducer,
  isApplyCoupoModalVisibleReducer,
  appliedCouponCodeReducer,
  xapSpecialsCompanyInfoReducer,
  xapSpecialsCompanyBrandingReducer,
  xapSpecialsCompanyProductsReducer,
  groupOfProductsReducer,
  cancelOrderReducer,
  orderDetailsReducer,
});
