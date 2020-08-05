let ordersState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const ordersInfoReducer = (state = ordersState, action) => {
  switch (action.type) {
    case "fetchOrdersInfo":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "fetchOrdersInfoError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearFetchOrdersInfo":
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

export default ordersInfoReducer;
