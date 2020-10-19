import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./SearchBoxComponent.css";
import {
  fetchProductsListForSearchAction,
  clearFetchProductsListForSearchAction,
} from "../../Actions/FetchProductsListForSearch";
import Loader from "../Loader/Loader";

const SearchBoxComponent = () => {
  const { productsListForSearch } = useSelector((state) => state);
  const history = useHistory();
  const dispatched = useDispatch();
  const [
    isSearchSuggestionVisibleState,
    setisSearchSuggestionVisibleState,
  ] = useState(false);
  const [searchProductFilterState, setSearchProductFilterState] = useState([]);
  const [searchInputTextValueState, setsearchInputTextValueState] = useState(
    ""
  );

  const filterSearchItem = (searchText) => {
    let filteredProducts = [];
    setSearchProductFilterState(filteredProducts);
    let splittedArray = searchText.split(" ");
    filteredProducts = productsListForSearch.data.filter(
      (str) =>
        str.product_name.toLowerCase().search(splittedArray[0].toLowerCase()) >=
        0
    );
    setSearchProductFilterState(filteredProducts);
    let i = 1;
    if (splittedArray.length > 1) {
      while (i < splittedArray.length) {
        let currentSearchText = splittedArray[i];
        if (currentSearchText !== "")
          filteredProducts = filteredProducts.filter(
            (data) =>
              data.product_name
                .toLowerCase()
                .search(currentSearchText.toLowerCase()) >= 0
          );
        i++;
      }
    }
    setSearchProductFilterState(filteredProducts);
  };

  const handleSearchInputOnChange = (event) => {
    setsearchInputTextValueState(event.target.value);
    if (event.target.value.length > 2) {
      if (productsListForSearch.isLoaded) {
        filterSearchItem(event.target.value);
      }
      setisSearchSuggestionVisibleState(true);
    } else {
      setisSearchSuggestionVisibleState(false);
    }
  };

  useEffect(() => {
    dispatched(clearFetchProductsListForSearchAction());
    dispatched(fetchProductsListForSearchAction());
    return function cleanup() {
      setSearchProductFilterState([]);
      setisSearchSuggestionVisibleState(false);
    };
  }, [dispatched]);

  const handleSearchProductFilterClick = (productId) => {
    handleCrossIconClick();
    history.push(`/Search-Result/${productId}`);
  };

  const handleCrossIconClick = () => {
    setSearchProductFilterState([]);
    setisSearchSuggestionVisibleState(false);
    setsearchInputTextValueState("");
  };

  return (
    <div className="serchBoxContainer">
      {productsListForSearch.isLoaded ? (
        <div className="searchBoxCard w3-card">
          <div className="w3-row">
            <div className="s1 w3-col searchIconSection">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="s10 w3-col searchInputBoxSection">
              <input
                type="text"
                value={searchInputTextValueState}
                className="searchInput"
                placeholder="What are you looking for today ?"
                onChange={handleSearchInputOnChange}
              />
            </div>
            <div
              className="s1 w3-col searchIconSection"
              style={{ textAlign: "right" }}
            >
              <i
                className={`fa fa-times ${
                  !isSearchSuggestionVisibleState && "w3-hide"
                }`}
                style={{ cursor: "pointer" }}
                onClick={handleCrossIconClick}
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <div
        className={`searchSuggestions w3-card ${
          !isSearchSuggestionVisibleState && "w3-hide"
        }`}
      >
        {productsListForSearch.isLoaded ? (
          productsListForSearch.error ? (
            <div>Something Went Wrong</div>
          ) : productsListForSearch.data.length ? (
            <>
              {searchProductFilterState.length ? (
                searchProductFilterState.map((data) => (
                  <div
                    className="searchFilteredItems"
                    onClick={() =>
                      handleSearchProductFilterClick(data.product_id)
                    }
                    key={data.product_id}
                  >
                    <div className="SearchFilterProductInfo w3-row">
                      <div className="productNameinSearchFilter w3-col s9">
                        {data.product_name}
                      </div>{" "}
                      <div className="w3-col s2 productQuantityinSearchFilter">
                        {data.product_quantity} {data.product_quantity_unit}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="searchFilteredItems">
                  <div className="SearchFilterProductInfo">
                    Nothing Found With <b>{searchInputTextValueState}</b>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div>No Data Found</div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SearchBoxComponent;
