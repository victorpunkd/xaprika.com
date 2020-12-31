import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchXapSpecialCompanyBrandingAction = (xapSpecialCompanyLink) => (
  dispatch
) => {
  fetch(
    `${getApiEndpoint()}/api/getCompanyBrandingInfoOfaCompany/${xapSpecialCompanyLink}`
  )
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "fetchXapSpecialsCompanyBrandingData",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "fetchXapSpecialsCompanyBrandingDataError",
          payLoad: error,
        });
      }
    );
};

export const clearFetchXapSpecialCompanyBrandingAction = () => {
  return {
    type: "clearfetchXapSpecialsCompanyBrandingData",
  };
};
