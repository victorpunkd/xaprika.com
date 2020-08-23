import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const checkPasswordAction = (phoneNo, password) => (dispatch) => {
  fetch(
    `${getApiEndpoint()}/api/checkCredentials/${phoneNo}/${encodeURIComponent(
      password
    )}`
  )
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
