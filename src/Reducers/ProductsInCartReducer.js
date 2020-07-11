let productsUnderCartState = {
  isLoaded: false,
  data: [],
  error: false,
};
const productsUnderCart = (state = productsUnderCartState, action) => {
  switch (action.type) {
    case "fetchProductsUnderCart":
      return { isLoaded: true, data: action.payLoad, error: false };
    case "fetchProductsUnderCartError":
      return { isLoaded: true, data: [], error: true };
    default:
      return state;
  }
};

export default productsUnderCart;
