import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { hideSideBar } from "./Actions/SideBarVisibleAction";
import { hideUserOptionSideBar } from "./Actions/UserOptionSideBarVisibleAction";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import UserOptionSideBar from "./Components/UserOptionsSideBar/UserOptionSidebar";
import UserInformation from "./Components/UserInformation/UserInformation";
import UserLogin from "./Components/UserLogin/UserLogin";
import PasswordOrOTP from "./Components/PasswordOrOTP/PasswordOrOTP";
import UserRegister from "./Components/UserRegister/UserRegister";
import AddressManagement from "./Components/AddressManagement/AddressManagement";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import Home from "./Components/Home/Home";
import ProductsUnderPrimaryCategory from "./Components/ProductsUnderPrimaryCategory/ProductsUnderPrimaryCategory";
import ProductsUnderSubCategory from "./Components/ProductsUnderSubCategory/ProductsUnderSubCategory";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import OrderConfirmed from "./Components/OrderConfirmed/OrderConfirmed";
import Footer from "./Components/Footer/Footer";
import AlertMessage from "./Components/AlertMessage/AlertMessage";

const App = () => {
  const {
    isSideBarVisible,
    isUerOptionSideBarVisible,
    alertMessage,
  } = useSelector((state) => state);
  const dispatched = useDispatch();
  return (
    <Router>
      <div className="App">
        <div className="appContainer">
          {alertMessage.isVisible && <AlertMessage />}
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
                path="/Products-SubCategory/:primaryCategoryLink/:categoryLink"
                component={ProductsUnderSubCategory}
              />
              <Route path="/Cart" component={Cart} />
              <Route path="/Checkout" component={Checkout} />
              <Route path="/Confirm-Order" component={OrderConfirmed} />
              <Route path="/UserLogin" component={UserLogin} />
              <Route path="/Password-OTP/:phoneNo" component={PasswordOrOTP} />
              <Route
                path="/User-Registration/:phoneNo/:otp"
                component={UserRegister}
              />
              <Route path="/UserInformation" component={UserInformation} />
              <Route path="/AddressManagement" component={AddressManagement} />
              <Route path="/OrderHistory" component={OrderHistory} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
