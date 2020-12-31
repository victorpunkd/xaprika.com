let xapSpecialsCompanyBrandingState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const xapSpecialsCompanyBrandingReducer = (
  state = xapSpecialsCompanyBrandingState,
  action
) => {
  switch (action.type) {
    case "fetchXapSpecialsCompanyBrandingData":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "fetchXapSpecialsCompanyBrandingDataError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearfetchXapSpecialsCompanyBrandingData":
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

export default xapSpecialsCompanyBrandingReducer;
