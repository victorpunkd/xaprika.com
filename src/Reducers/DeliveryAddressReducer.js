let deliveryAddressState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const deliveryAddressReducer = (state = deliveryAddressState, action) => {
  switch (action.type) {
    case "deliveryAddress":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "deliveryAddressError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearDeliveryAddress":
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

export default deliveryAddressReducer;
