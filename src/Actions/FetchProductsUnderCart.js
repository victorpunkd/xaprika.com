import { getApiEndpoint } from "../apiEndpoint";

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
