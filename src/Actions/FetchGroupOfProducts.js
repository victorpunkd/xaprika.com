import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchGroupOfProducts = (productIds) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getProductsByaGroupOfIds/${[...productIds]}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "fetchGroupOfProductsData",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "fetchGroupOfProductsError",
          payLoad: error,
        });
      }
    );
};

export const clearFetchGroupOfProducts = () => {
  return {
    type: "clearFetchGroupOfProductsData",
  };
};
