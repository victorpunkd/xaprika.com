import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchFinalCheckoutCalculationAction = (
  productIds,
  appliedCouponCode
) => (dispatch) => {
  let couponCode = appliedCouponCode.length ? appliedCouponCode : "Null";
  fetch(
    `${getApiEndpoint()}/api/finalPriceCalculation/${[
      ...productIds,
    ]}/${couponCode}`
  )
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "finalCheckoutCalculation",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "finalCheckoutCalculationError",
          payLoad: error,
        });
      }
    );
};

export const clearfetchFinalCheckoutCalculationAction = () => {
  return {
    type: "clearFinalCheckoutCalculation",
  };
};
