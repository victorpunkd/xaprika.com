let confirmOrder = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const confirmOrderReducer = (state = confirmOrder, action) => {
  switch (action.type) {
    case "confirmOrder":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "confirmOrderError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearConfirmOrder":
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

export default confirmOrderReducer;
