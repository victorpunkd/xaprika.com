import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchAddressInfoAction = (phoneNo) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getAllAddressofAnUser/${phoneNo}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "fetchAddressInfo",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "fetchAddressInfoError",
          payLoad: error,
        });
      }
    );
};

export const clearFetchAddressInfoAction = () => {
  return {
    type: "clearFetchAddressInfo",
  };
};
