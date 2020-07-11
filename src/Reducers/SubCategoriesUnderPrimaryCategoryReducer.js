let subCategoryState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const subCategoryData = (state = subCategoryState, action) => {
  switch (action.type) {
    case "fetchSecondaryCategoryData":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "fetchSecondaryCategoryDataError":
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

export default subCategoryData;
