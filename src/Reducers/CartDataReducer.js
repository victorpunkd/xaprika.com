const cartData = (state = [], action) => {
  switch (action.type) {
    case "addProductToCart":
      return [...state, action.payLoad];
    case "removeProductFromCart":
      const index = state.findIndex((item) => item === action.payLoad);
      return state.filter((_, i) => i !== index);
    case "clearCart":
      return [];
    default:
      return state;
  }
};

export default cartData;
