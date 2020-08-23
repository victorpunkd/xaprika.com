import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SearchResult.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import ProductList from "../ProductList/ProductList";
import SearchBoxComponent from "../SearchBoxComponent/SearchBoxComponent";
import {
  fetchSelectiveProductsById,
  clearfetchSelectiveProductsById,
} from "../../Actions/FetchSelectiveProductsById";

const SearchResult = ({ match }) => {
  const dispatched = useDispatch();
  const { selectiveProductsReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatched(clearfetchSelectiveProductsById());
    dispatched(fetchSelectiveProductsById([match.params.productIds]));
    return function cleanUp() {
      dispatched(clearfetchSelectiveProductsById());
    };
  }, [dispatched, match.params.productIds]);

  return (
    <div className="searchResultContainer">
      <CurrentPageNameHeader categoryName="Search Products" />
      <div>
        <div className="searchBox">
          <SearchBoxComponent />
        </div>
        <div>
          <ProductList products={selectiveProductsReducer} />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
