let orderDetailsData = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const orderDetailsReducer = (state = orderDetailsData, action) => {
  switch (action.type) {
    case "fetchOrderDetails":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "fetchOrderDetailsError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearfetchOrderDetails":
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

export default orderDetailsReducer;
