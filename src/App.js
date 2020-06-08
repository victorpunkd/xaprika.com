import React from "react";
import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./Components/Home/Home";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <NavBar />
        <div className="pages">
          <Home />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
