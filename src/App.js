import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { hideSideBar } from "./Actions/SideBarVisibleAction";
import { hideUserOptionSideBar } from "./Actions/UserOptionSideBarVisibleAction";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import UserOptionSideBar from "./Components/UserOptionsSideBar/UserOptionSidebar";
import UserInformation from "./Components/UserInformation/UserInformation";
import UserLogin from "./Components/UserLogin/UserLogin";
import PasswordOrOTP from "./Components/PasswordOrOTP/PasswordOrOTP";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import UserRegister from "./Components/UserRegister/UserRegister";
import AddressManagement from "./Components/AddressManagement/AddressManagement";
import AddressForm from "./Components/AddressForm/AddressForm";
import EditAddressForm from "./Components/EditAddressForm/EditAddressForm";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import OrderDetails from "./Components/OrderDetails/OrderDetails";
import Home from "./Components/Home/Home";
import ProductsUnderPrimaryCategory from "./Components/ProductsUnderPrimaryCategory/ProductsUnderPrimaryCategory";
import ProductsUnderSubCategory from "./Components/ProductsUnderSubCategory/ProductsUnderSubCategory";
import SearchResult from "./Components/SearchResult/SearchResult";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import OrderConfirmed from "./Components/OrderConfirmed/OrderConfirmed";
import Footer from "./Components/Footer/Footer";
import AlertMessage from "./Components/AlertMessage/AlertMessage";
import ApplyCouponModal from "./Components/ApplyCouponModal/ApplyCouponModal";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import Error404Page from "./Components/Error404Page/Error404Page";

const App = () => {
  const {
    isSideBarVisible,
    isUerOptionSideBarVisible,
    alertMessage,
    isApplyCoupoModalVisibleReducer,
  } = useSelector((state) => state);
  const dispatched = useDispatch();

  const initializeReactGA = () => {
    ReactGA.initialize("UA-176266477-1");
    ReactGA.pageview("/");
  };

  useEffect(() => {
    initializeReactGA();
  });

  return (
    <Router>
      <div className="App">
        <div className="appContainer">
          {alertMessage.isVisible && <AlertMessage />}
          {isApplyCoupoModalVisibleReducer && <ApplyCouponModal />}
          <NavBar />
          {isSideBarVisible && <SideBar />}
          {isUerOptionSideBarVisible && <UserOptionSideBar />}
          <div
            className={`pages ${
              (isSideBarVisible || isUerOptionSideBarVisible) &&
              "backgroundOpacityLow"
            }`}
            onClick={() => {
              dispatched(hideSideBar());
              dispatched(hideUserOptionSideBar());
            }}
          >
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Home" component={Home} />
              <Route
                path="/Products-Category/:categoryLink"
                component={ProductsUnderPrimaryCategory}
              />
              <Route
                path="/Search-Result/:productIds"
                component={SearchResult}
              />
              <Route
                path="/Products-SubCategory/:primaryCategoryLink/:categoryLink"
                component={ProductsUnderSubCategory}
              />
              <Route path="/Categories" component={CategoryPage} />
              <Route path="/Cart" component={Cart} />
              <Route path="/Checkout" component={Checkout} />
              <Route path="/Confirm-Order" component={OrderConfirmed} />
              <Route path="/UserLogin" component={UserLogin} />
              <Route path="/Password-OTP/:phoneNo" component={PasswordOrOTP} />
              <Route
                path="/ForgetPassword/:phoneNo"
                component={ForgetPassword}
              />
              <Route
                path="/User-Registration/:phoneNo/:otp"
                component={UserRegister}
              />
              <Route path="/UserInformation" component={UserInformation} />
              <Route path="/AddressManagement" component={AddressManagement} />
              <Route path="/Add-Address" component={AddressForm} />
              <Route
                path="/Edit-Address/:tag_name"
                component={EditAddressForm}
              />
              <Route path="/OrderHistory" component={OrderHistory} />
              <Route path="/OrderDetails/:odrerNo" component={OrderDetails} />
              <Route path="/ContactUs" component={ContactUs} />
              <Route path="/AboutUs" component={AboutUs} />
              <Route path="*" exact={true} component={Error404Page} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
