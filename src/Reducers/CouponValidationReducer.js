let couponValidationState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const couponValidationReducer = (state = couponValidationState, action) => {
  switch (action.type) {
    case "couponValidation":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "couponValidationError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearCouponValidation":
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

export default couponValidationReducer;
