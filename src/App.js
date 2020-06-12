import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import ProductsUnderCategory from "./Components/ProductsUnderCategory/ProductsUnderCategory";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import { Footer } from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="appContainer">
          <NavBar />
          <div className="pages">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Home" component={Home} />
              <Route
                path="/Products-Under-Category/:categoryID/:categoryName"
                component={ProductsUnderCategory}
              />
              <Route path="/Cart" component={Cart} />
              <Route path="/Checkout" component={Checkout} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
