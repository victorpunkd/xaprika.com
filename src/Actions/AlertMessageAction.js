export const showAlertMessage = (message) => {
  return {
    type: "showAlertMessage",
    payLoad: message,
  };
};

export const hideAlertMessage = () => {
  return {
    type: "hideAlertMessage",
  };
};
