import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const confirmOrderAction = (
  phoneNo,
  itemCount,
  totalAmount,
  discountAmount,
  deliveryCharges,
  otherCharges,
  deliveryAddress,
  area,
  city,
  pinCode,
  state,
  landmark,
  recieversPhoneNo,
  cartData
) => (dispatch) => {
  fetch(
    `${getApiEndpoint()}/api/confirmOrder/${phoneNo}/${itemCount}/${totalAmount}/${discountAmount}/${deliveryCharges}/${otherCharges}/${encodeURIComponent(
      deliveryAddress
    )}/${encodeURIComponent(
      area
    )}/${city}/${pinCode}/${state}/${encodeURIComponent(
      landmark
    )}/${recieversPhoneNo}/${[...cartData]}`
  )
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "confirmOrder",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "confirmOrderError",
          payLoad: error,
        });
      }
    );
};

export const clearConfirmOrderAction = () => {
  return {
    type: "clearConfirmOrder",
  };
};
