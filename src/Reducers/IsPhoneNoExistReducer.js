let isPhoneNoExistState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const isPhoneNoExist = (state = isPhoneNoExistState, action) => {
  switch (action.type) {
    case "checkPhoneNoExistence":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "checkPhoneNoExistenceError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearPhoneNoExistState":
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

export default isPhoneNoExist;
