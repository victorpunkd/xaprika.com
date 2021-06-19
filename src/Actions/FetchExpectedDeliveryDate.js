import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchExpectedDeliveryDateAction =
  (isExpressDeliverySelected) => (dispatch) => {
    fetch(
      `${getApiEndpoint()}/api/getExpectedDeliveryDate/${isExpressDeliverySelected}`
    )
      .then((res) => res.json())
      .then(
        (posts) => {
          dispatch({
            type: "expectedDeliveryDate",
            payLoad: posts,
          });
        },
        (error) => {
          dispatch({
            type: "expectedDeliveryDateError",
            payLoad: error,
          });
        }
      );
  };

export const clearFetchExpectedDeliveryDateAction = () => {
  return {
    type: "clearExpectedDeliveryDate",
  };
};
