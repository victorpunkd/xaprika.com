let primaryCategoryState = {
  isLoaded: false,
  data: [],
};
const primaryCategoryData = (state = primaryCategoryState, action) => {
  switch (action.type) {
    case "fetchPrimarycategoryData":
      return { isLoaded: true, data: action.payLoad };
    default:
      return state;
  }
};

export default primaryCategoryData;
