import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchSelectiveProductsById = (productIds) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getProductsByaGroupOfIds/${[...productIds]}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "selectiveProducts",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "selectiveProductsError",
          payLoad: error,
        });
      }
    );
};

export const clearfetchSelectiveProductsById = () => {
  return {
    type: "clearSelectiveProducts",
  };
};
