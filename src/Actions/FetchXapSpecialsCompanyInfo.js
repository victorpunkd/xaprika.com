import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchXapSpecialCompanyInfoAction = () => (dispatch) => {
  fetch(`${getApiEndpoint()}/api/getAllCompanyInXapSpecials`)
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "fetchXapSpecialsCompanyInfoData",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "fetchXapSpecialsCompanyInfoDataError",
          payLoad: error,
        });
      }
    );
};

export const clearFetchXapSpecialCompanyInfoAction = () => {
  return {
    type: "clearFetchXapSpecialsCompanyInfoDataError",
  };
};
