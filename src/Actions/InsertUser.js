import { getApiEndpoint } from "../apiEndpoint";

export const insertUserAction = (phoneNo, emailId, name, password) => (
  dispatch
) => {
  fetch(
    `${getApiEndpoint()}/api/insertNewUserData/${phoneNo}/${emailId}/${name}/${password}`
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
