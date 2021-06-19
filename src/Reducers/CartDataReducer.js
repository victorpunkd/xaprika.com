const cartData = (state = [], action) => {
  switch (action.type) {
    case "addProductToCart":
      localStorage.setItem("cart", [...state, action.payLoad]);
      return [...state, action.payLoad];
    case "addProductArrayToCart":
      return action.payLoad.split(",");
    case "removeProductFromCart":
      const index = state.findIndex((item) => item === action.payLoad);
      localStorage.setItem(
        "cart",
        state.filter((_, i) => i !== index)
      );
      return state.filter((_, i) => i !== index);
    case "removeAllTheOccurencesOfAProductFromCart":
      let tempData = state.filter((element) => element !== action.payLoad);
      localStorage.setItem("cart", tempData);
      return tempData;
    case "clearCart":
      localStorage.setItem("cart", []);
      return [];
    default:
      return state;
  }
};

export default cartData;
