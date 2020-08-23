import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const updateUserInfoAction = (phoneNo, mailId, name, password) => (
  dispatch
) => {
  fetch(
    `${getApiEndpoint()}/api/updateUserInformation/${phoneNo}/${mailId}/${encodeURIComponent(
      name
    )}/${encodeURIComponent(password)}`
  )
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "updateUserInformation",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "updateUserInformationError",
          payLoad: error,
        });
      }
    );
};

export const clearUpdateUserInfoAction = () => {
  return {
    type: "clearUpdateUserInformation",
  };
};
