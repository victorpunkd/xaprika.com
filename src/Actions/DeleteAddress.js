import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const deleteAddressAction = (phoneNo, tagName) => (dispatch) => {
  fetch(
    `${getApiEndpoint()}/api/deleteAddress/${phoneNo}/${encodeURIComponent(
      tagName
    )}`
  )
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "deleteAddress",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "deleteAddressError",
          payLoad: error,
        });
      }
    );
};

export const clearDeleteAdressAction = () => {
  return {
    type: "clearDeleteAddress",
  };
};
