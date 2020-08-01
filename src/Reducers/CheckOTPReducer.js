let checkOTP = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const isOTPMatching = (state = checkOTP, action) => {
  switch (action.type) {
    case "checkOTP":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "checkOTPError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearcheckOTP":
      return {
        isLoaded: false,
        data: [],
        error: false,
        errorMessage: [],
      };
    default:
      return state;
  }
};

export default isOTPMatching;
