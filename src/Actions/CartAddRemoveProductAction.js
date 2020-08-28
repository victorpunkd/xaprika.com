export const addProductToCart = (productId) => {
  return {
    type: "addProductToCart",
    payLoad: productId,
  };
};

export const removeProductFromCart = (productId) => {
  return {
    type: "removeProductFromCart",
    payLoad: productId,
  };
};

export const clearCart = () => {
  return {
    type: "clearCart",
  };
};
