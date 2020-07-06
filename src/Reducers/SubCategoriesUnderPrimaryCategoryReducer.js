let subCategoryState = {
  isLoaded: false,
  data: [],
};
const subCategoryData = (state = subCategoryState, action) => {
  switch (action.type) {
    case "fetchSecondaryCategoryData":
      return { isLoaded: true, data: action.payLoad };
    default:
      return state;
  }
};

export default subCategoryData;
