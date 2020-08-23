import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const insertUserAction = (phoneNo, emailId, name, password) => (
  dispatch
) => {
  fetch(
    `${getApiEndpoint()}/api/insertNewUserData/${phoneNo}/${emailId}/${encodeURIComponent(
      name
    )}/${encodeURIComponent(password)}`
  )
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "insertUser",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "insertUserError",
          payLoad: error,
        });
      }
    );
};

export const clearInsertUserAction = () => {
  return {
    type: "clearInsertUser",
  };
};
