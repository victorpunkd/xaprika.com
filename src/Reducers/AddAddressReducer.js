let addAddressData = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const addAdressReducer = (state = addAddressData, action) => {
  switch (action.type) {
    case "addAddress":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "addAddressError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearAddAddress":
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

export default addAdressReducer;
