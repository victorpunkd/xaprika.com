let productsUnderCartState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const productsUnderCart = (state = productsUnderCartState, action) => {
  switch (action.type) {
    case "fetchProductsUnderCart":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "fetchProductsUnderCartError":
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

export default productsUnderCart;
