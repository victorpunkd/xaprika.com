export const addProductToCart = (productId) => {
  console.log(productId);
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
