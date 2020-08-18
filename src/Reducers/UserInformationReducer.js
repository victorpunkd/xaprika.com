let userInformationData = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const userInformationReducer = (state = userInformationData, action) => {
  switch (action.type) {
    case "userInformation":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "userInformationError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearUserInformation":
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

export default userInformationReducer;
