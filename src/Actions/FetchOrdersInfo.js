import { getApiEndpoint } from "../apiEndpoint";

export const fetchOrdersInfo = (phoneNo) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getAllOrdersofAnUser/${phoneNo}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "fetchOrdersInfo",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "fetchOrdersInfoError",
          payLoad: error,
        });
      }
    );
};

export const clearFetchOrdersInfo = () => {
  return {
    type: "clearFetchOrdersInfo",
  };
};
