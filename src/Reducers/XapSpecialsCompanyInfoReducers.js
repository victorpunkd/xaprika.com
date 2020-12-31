let xapSpecialsCompanyInfoState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const xapSpecialsCompanyInfoReducer = (
  state = xapSpecialsCompanyInfoState,
  action
) => {
  switch (action.type) {
    case "fetchXapSpecialsCompanyInfoData":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "fetchXapSpecialsCompanyInfoDataError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    case "clearFetchXapSpecialsCompanyInfoDataError":
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

export default xapSpecialsCompanyInfoReducer;
