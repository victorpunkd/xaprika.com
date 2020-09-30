import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchCouponInformationAction = (coupon, totalProductValue) => (
  dispatch
) => {
  fetch(
    `${getApiEndpoint()}/api/getCouponDetails/${coupon}/${totalProductValue}`
  )
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
