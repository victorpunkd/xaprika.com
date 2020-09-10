let expectedDeliveryDateState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const expectedDeliveryDateReducer = (
  state = expectedDeliveryDateState,
  action
) => {
  switch (action.type) {
    case "expectedDeliveryDate":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "expectedDeliveryDateError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearExpectedDeliveryDate":
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

export default expectedDeliveryDateReducer;
