let productDataState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const productData = (state = productDataState, action) => {
  switch (action.type) {
    case "fetchProductData":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "fetchProductDataError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    default:
      return state;
  }
};

export default productData;
