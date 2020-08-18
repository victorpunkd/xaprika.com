import { getApiEndpoint } from "../apiEndpoint";

export const fetchUserInfoAction = (phoneNo) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getUserInformation/${phoneNo}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "userInformation",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "userInformationError",
          payLoad: error,
        });
      }
    );
};

export const clearFetchUserInfoAction = () => {
  return {
    type: "clearUserInformation",
  };
};
