let makeAddressDefaultData = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const makeAddressDefaultReducer = (state = makeAddressDefaultData, action) => {
  switch (action.type) {
    case "makeAddressDefault":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "makeAddressDefaultError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearmakeAddressDefault":
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

export default makeAddressDefaultReducer;
