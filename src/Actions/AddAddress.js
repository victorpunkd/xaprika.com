import { getApiEndpoint } from "../apiEndpoint";

export const addAddressAction = (
  phoneNo,
  address,
  area,
  landmark,
  city,
  pincode,
  state,
  tagname
) => (dispatch) => {
  fetch(
    `${getApiEndpoint()}/api/insertNewAddress/${phoneNo}/${address}/${area}/${landmark}/${city}/${pincode}/${state}/${tagname}`
  )
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "addAddress",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "addAddressError",
          payLoad: error,
        });
      }
    );
};

export const clearAddAddressAction = () => {
  return {
    type: "clearAddAddress",
  };
};
