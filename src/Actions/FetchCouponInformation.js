import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchCouponInformationAction = (coupon) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getCouponDetails/${coupon}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "couponValidation",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "couponValidationError",
          payLoad: error,
        });
      }
    );
};

export const clearFetchCouponInformationAction = () => {
  return {
    type: "clearCouponValidation",
  };
};
