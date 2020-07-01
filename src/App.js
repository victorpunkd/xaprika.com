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
import AddressManagement from "./Components/AddressManagement/AddressManagement";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import Home from "./Components/Home/Home";
import ProductsUnderCategory from "./Components/ProductsUnderCategory/ProductsUnderCategory";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import { Footer } from "./Components/Footer/Footer";

const App = () => {
  const { isSideBarVisible, isUerOptionSideBarVisible } = useSelector(
    (state) => state
  );
  const dispatched = useDispatch();
  return (
    <Router>
      <div className="App">
        <div className="appContainer">
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
                path="/Products-Category/:categoryID/:categoryName"
                component={ProductsUnderCategory}
              />
              <Route path="/Cart" component={Cart} />
              <Route path="/Checkout" component={Checkout} />
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
