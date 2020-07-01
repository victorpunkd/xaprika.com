import { getApiEndpoint } from "../apiEndpoint";

export const fetchBannerData = () => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getActiveBanners`)
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: "fetchBannerData",
        payLoad: posts,
      })
    );
};
