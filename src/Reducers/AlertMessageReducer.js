let alertMessageData = {
  isVisible: false,
  message: "",
};
const alertMessage = (state = alertMessageData, action) => {
  switch (action.type) {
    case "showAlertMessage":
      return { isVisible: true, message: action.payLoad };
    case "hideAlertMessage":
      return { isVisible: false, message: "" };
    default:
      return state;
  }
};

export default alertMessage;
