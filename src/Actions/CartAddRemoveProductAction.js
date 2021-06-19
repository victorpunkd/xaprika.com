export const addProductToCart = (productId) => {
  return {
    type: "addProductToCart",
    payLoad: productId,
  };
};

export const addProductArrayToCart = (productIdArray) => {
  return {
    type: "addProductArrayToCart",
    payLoad: productIdArray,
  };
};

export const removeProductFromCart = (productId) => {
  return {
    type: "removeProductFromCart",
    payLoad: productId,
  };
};

export const removeAllTheOccurencesOfAProductFromCart = (productId) => {
  return {
    type: "removeAllTheOccurencesOfAProductFromCart",
    payLoad: productId,
  };
};

export const clearCart = () => {
  return {
    type: "clearCart",
  };
};
