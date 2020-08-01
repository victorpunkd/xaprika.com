import { getApiEndpoint } from "../apiEndpoint";

export const sendOTP = (phoneNo) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/sendOTP/${phoneNo}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "sendOTP",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "sendOTPError",
          payLoad: error,
        });
      }
    );
};

export const clearSendOTP = () => {
  return {
    type: "clearsendOTP",
  };
};
