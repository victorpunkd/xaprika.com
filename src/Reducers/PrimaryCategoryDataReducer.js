let primaryCategoryState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const primaryCategoryData = (state = primaryCategoryState, action) => {
  switch (action.type) {
    case "fetchPrimarycategoryData":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "fetchPrimarycategoryDataError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    default:
      return state;
  }
};

export default primaryCategoryData;
