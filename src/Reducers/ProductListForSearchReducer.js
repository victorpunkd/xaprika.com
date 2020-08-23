let productsListForSearchState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const productsListForSearch = (state = productsListForSearchState, action) => {
  switch (action.type) {
    case "fetchProductsListForSearch":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "fetchProductsListForSearchError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearFetchProductsListForSearch":
      return {
        isLoaded: false,
        data: [],
        error: false,
        errorMessage: [],
      };
    default:
      return state;
  }
};

export default productsListForSearch;
