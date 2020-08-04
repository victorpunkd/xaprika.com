import { getApiEndpoint } from "../apiEndpoint";

export const fetchFinalCheckoutCalculationAction = (productIds) => (
  dispatch
) => {
  fetch(`${getApiEndpoint()}/api/finalPriceCalculation/${[...productIds]}`)
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
