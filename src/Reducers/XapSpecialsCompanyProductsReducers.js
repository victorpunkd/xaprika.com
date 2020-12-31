let xapSpecialsCompanyProductsState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const xapSpecialsCompanyProductsReducer = (
  state = xapSpecialsCompanyProductsState,
  action
) => {
  switch (action.type) {
    case "fetchXapSpecialsCompanyProductsData":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "fetchXapSpecialsCompanyProductsDataError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearFetchXapSpecialsCompanyProductsData":
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

export default xapSpecialsCompanyProductsReducer;
