let cancelOrderData = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const cancelOrderReducer = (state = cancelOrderData, action) => {
  switch (action.type) {
    case "cancelOrder":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "cancelOrderError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearCancelOrder":
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

export default cancelOrderReducer;
