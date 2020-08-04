let insertUserData = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};

const isInsertUserSuccessfullReducer = (state = insertUserData, action) => {
  switch (action.type) {
    case "insertUser":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "insertUserError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearInsertUser":
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

export default isInsertUserSuccessfullReducer;
