let groupOfProductsState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const groupOfProductsReducer = (state = groupOfProductsState, action) => {
  switch (action.type) {
    case "fetchGroupOfProductsData":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "fetchGroupOfProductsError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearFetchGroupOfProductsData":
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

export default groupOfProductsReducer;
