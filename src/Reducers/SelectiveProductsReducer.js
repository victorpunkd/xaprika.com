let selectiveProductsState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const selectiveProductsReducer = (state = selectiveProductsState, action) => {
  switch (action.type) {
    case "selectiveProducts":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "selectiveProductsError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearSelectiveProducts":
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

export default selectiveProductsReducer;
