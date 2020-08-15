let updateAddressData = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const updateAddressReducer = (state = updateAddressData, action) => {
  switch (action.type) {
    case "updateAddress":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "updateAddressError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearUpdateAddress":
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

export default updateAddressReducer;
