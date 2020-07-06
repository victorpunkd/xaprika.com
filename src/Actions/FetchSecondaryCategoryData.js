import { getApiEndpoint } from "../apiEndpoint";

export const fetchSecondaryCategoryData = (categoryLink) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getAllSecondaryCategoryData/${categoryLink}`)
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: "fetchSecondaryCategoryData",
        payLoad: posts,
      })
    );
};
