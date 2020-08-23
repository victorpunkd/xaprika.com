import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchSecondaryCategoryData = (categoryLink) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getAllSecondaryCategoryData/${categoryLink}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "fetchSecondaryCategoryData",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "fetchSecondaryCategoryDataError",
          payLoad: error,
        });
      }
    );
};

export const clearSecondaryCategoryData = () => {
  return {
    type: "clearSecondaryCategoryData",
  };
};
