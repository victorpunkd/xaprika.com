import { getApiEndpoint } from "../apiEndpoint";

export const fetchProductData = (categoryLink) => (dispatch) => {
  fetch(
    `${getApiEndpoint()}/api/getAllProductUnderPrimaryCategory/${categoryLink}`
  )
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: "fetchProductData",
        payLoad: posts,
      })
    );
};
