import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const checkIfPhoneNoExist = (phoneNo) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/isPhoneNoExist/${phoneNo}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "checkPhoneNoExistence",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "checkPhoneNoExistenceError",
          payLoad: error,
        });
      }
    );
};

export const clearCheckPhoneNoExistData = () => {
  return {
    type: "clearPhoneNoExistState",
  };
};
