let productDataState = {
  isLoaded: false,
  data: [],
};
const productData = (state = productDataState, action) => {
  switch (action.type) {
    case "fetchProductData":
      return { isLoaded: true, data: action.payLoad };
    default:
      return state;
  }
};

export default productData;
