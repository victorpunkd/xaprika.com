let deleteAddressData = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const deleteAdressReducer = (state = deleteAddressData, action) => {
  switch (action.type) {
    case "deleteAddress":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "deleteAddressError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearDeleteAddress":
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

export default deleteAdressReducer;
