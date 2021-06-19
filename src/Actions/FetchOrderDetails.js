import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchOrderDetailsAction = (orderId) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getOrderDetails/${orderId}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "fetchOrderDetails",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "fetchOrderDetailsError",
          payLoad: error,
        });
      }
    );
};

export const clearfetchOrderDetailsAction = () => {
  return {
    type: "clearfetchOrderDetails",
  };
};
