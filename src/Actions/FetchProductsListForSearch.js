import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchProductsListForSearchAction = () => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getAllTheProduct`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "fetchProductsListForSearch",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "fetchProductsListForSearchError",
          payLoad: error,
        });
      }
    );
};

export const clearFetchProductsListForSearchAction = () => {
  return {
    type: "clearFetchProductsListForSearch",
  };
};
