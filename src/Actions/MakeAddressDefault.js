import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const makeAddressDefaultAction = (phoneNo, tagname) => (dispatch) => {
  fetch(
    `${getApiEndpoint()}/api/makeAddressDefault/${phoneNo}/${encodeURIComponent(
      tagname
    )}`
  )
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "makeAddressDefault",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "makeAddressDefaultError",
          payLoad: error,
        });
      }
    );
};

export const clearMakeAddressDefaultAction = () => {
  return {
    type: "clearmakeAddressDefault",
  };
};
