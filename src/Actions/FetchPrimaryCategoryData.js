import { getApiEndpoint } from "../apiEndpoint";

export const fetchPrimarycategoryData = () => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getAllPrimaryCategoryData`)
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: "fetchPrimarycategoryData",
        payLoad: posts,
      })
    );
};
