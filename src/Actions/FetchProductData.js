import { getApiEndpoint } from "../apiEndpoint";

export const fetchProductData = (categoryLink) => (dispatch) => {
  fetch(
    `${getApiEndpoint()}/api/getAllProductUnderPrimaryCategory/${categoryLink}`
  )
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "fetchProductData",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "fetchProductDataError",
          payLoad: error,
        });
      }
    );
};

export const fetchProductDataUnderSecondaryCategory = (
  secondaryCategoryLink
) => (dispatch) => {
  fetch(
    `${getApiEndpoint()}/api/getAllProductUnderSecondaryCategory/${secondaryCategoryLink}`
  )
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "fetchProductData",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "fetchProductDataError",
          payLoad: error,
        });
      }
    );
};

export const clearProductData = () => {
  return {
    type: "clearProuctData",
  };
};
