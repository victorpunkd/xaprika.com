let finalCheckoutCalculationState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const finalCheckoutCalculationReducer = (
  state = finalCheckoutCalculationState,
  action
) => {
  switch (action.type) {
    case "finalCheckoutCalculation":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "finalCheckoutCalculationError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearFinalCheckoutCalculation":
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

export default finalCheckoutCalculationReducer;
