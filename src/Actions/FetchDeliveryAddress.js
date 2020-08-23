import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchDeliveryAddressAction = (phoneNo) => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getDefaultAddress/${phoneNo}`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "deliveryAddress",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "deliveryAddressError",
          payLoad: error,
        });
      }
    );
};

export const clearFetchDeliveryAddressAction = () => {
  return {
    type: "clearDeliveryAddress",
  };
};
