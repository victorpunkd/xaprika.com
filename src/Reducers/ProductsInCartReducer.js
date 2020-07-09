let productsUnderCartState = {
  isLoaded: false,
  data: [],
};
const productsUnderCart = (state = productsUnderCartState, action) => {
  switch (action.type) {
    case "fetchProductsUnderCart":
      return { isLoaded: true, data: action.payLoad };
    default:
      return state;
  }
};

export default productsUnderCart;
