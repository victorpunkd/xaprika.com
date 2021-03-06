import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchProductsUnderCart = (productIds) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getProductsByaGroupOfIds/${[...productIds]}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "fetchProductsUnderCart",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "fetchProductsUnderCartError",
          payLoad: error,
        });
      }
    );
};

export const clearFetchProductsUnderCart = () => {
  return {
    type: "clearFetchProductsUnderCart",
  };
};
