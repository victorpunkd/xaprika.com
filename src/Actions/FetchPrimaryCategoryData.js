import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchPrimarycategoryData = () => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getAllPrimaryCategoryData`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "fetchPrimarycategoryData",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "fetchPrimarycategoryDataError",
          payLoad: error,
        });
      }
    );
};
