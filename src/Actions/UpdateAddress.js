import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const updateAddressAction = (
  phoneNo,
  currentTagName,
  address_line_1,
  area,
  city,
  pin_code,
  state,
  landmark,
  tag_name
) => (dispatch) => {
  fetch(
    `${getApiEndpoint()}/api/updateAddress/${phoneNo}/${encodeURIComponent(
      currentTagName
    )}/${encodeURIComponent(address_line_1)}/${encodeURIComponent(
      area
    )}/${city}/${pin_code}/${state}/${encodeURIComponent(
      landmark
    )}/${encodeURIComponent(tag_name)}`
  )
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "updateAddress",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "updateAddressError",
          payLoad: error,
        });
      }
    );
};

export const clearUpdateAddressAction = () => {
  return {
    type: "clearUpdateAddress",
  };
};
