import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const checkOTP = (phoneNo, OTP) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/checkOTP/${phoneNo}/${OTP}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "checkOTP",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "checkOTPError",
          payLoad: error,
        });
      }
    );
};

export const clearcheckOTP = () => {
  return {
    type: "clearcheckOTP",
  };
};
