import { getApiEndpoint } from "../apiEndpoint";

export const checkPasswordAction = (phoneNo, password) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/checkCredentials/${phoneNo}/${password}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "checkPassword",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "checkPasswordError",
          payLoad: error,
        });
      }
    );
};

export const clearCheckPasswordAction = () => {
  return {
    type: "clearcheckPassword",
  };
};
