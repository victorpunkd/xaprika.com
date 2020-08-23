import { getApiEndpoint } from "../CommonControls/apiEndpoint";

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
    `${getApiEndpoint()}/api/insertNewAddress/${phoneNo}/${encodeURIComponent(
      address
    )}/${encodeURIComponent(area)}/${encodeURIComponent(
      landmark
    )}/${city}/${pincode}/${state}/${encodeURIComponent(tagname)}`
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
