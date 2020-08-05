let addressState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const addressInfoReducer = (state = addressState, action) => {
  switch (action.type) {
    case "fetchAddressInfo":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "fetchAddressInfoError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearFetchAddressInfo":
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

export default addressInfoReducer;
