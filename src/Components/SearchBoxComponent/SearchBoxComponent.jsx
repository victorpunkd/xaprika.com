import React, { Component } from "react";
import "./SearchBoxComponent.css";

export class SearchBoxComponent extends Component {
  render() {
    return (
      <div className="serchBoxContainer">
        <div className="searchBoxCard w3-card">
          <div className="w3-row">
            <div className="s1 w3-col searchIconSection">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="s11 w3-col searchInputBoxSection w3-green">
              <input
                type="text"
                className="searchInput"
                placeholder="What are you looking for today ?"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBoxComponent;
