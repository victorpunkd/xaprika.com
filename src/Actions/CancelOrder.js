import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const cancelOrderAction = (orderId, phoneNo) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/cancelAnOrder/${orderId}/${phoneNo}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "cancelOrder",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "cancelOrderError",
          payLoad: error,
        });
      }
    );
};

export const clearCancelOrderAction = () => {
  return {
    type: "clearCancelOrder",
  };
};
