let OTPSent = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const isOTPSent = (state = OTPSent, action) => {
  switch (action.type) {
    case "sendOTP":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "sendOTPError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearsendOTP":
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

export default isOTPSent;
