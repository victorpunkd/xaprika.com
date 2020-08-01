let checkPassword = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const checkPasswordReducer = (state = checkPassword, action) => {
  switch (action.type) {
    case "checkPassword":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "checkPasswordError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearcheckPassword":
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

export default checkPasswordReducer;
