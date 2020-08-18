let updateUserInformationData = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const updateUserInformationReducer = (
  state = updateUserInformationData,
  action
) => {
  switch (action.type) {
    case "updateUserInformation":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "updateUserInformationError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearUpdateUserInformation":
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

export default updateUserInformationReducer;
