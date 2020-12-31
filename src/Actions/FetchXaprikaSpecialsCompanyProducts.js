import { getApiEndpoint } from "../CommonControls/apiEndpoint";

export const fetchXapSpecialCompanyProductsAction = (xapSpecialCompanyLink) => (
  dispatch
) => {
  fetch(
    `${getApiEndpoint()}/api/getAllProductsOfaCompany/${xapSpecialCompanyLink}`
  )
    .then((res) => res.json())
    .then(
      (posts) => {
        dispatch({
          type: "fetchXapSpecialsCompanyProductsData",
          payLoad: posts,
        });
      },
      (error) => {
        dispatch({
          type: "fetchXapSpecialsCompanyProductsDataError",
          payLoad: error,
        });
      }
    );
};

export const clearFetchXapSpecialCompanyProductsAction = () => {
  return {
    type: "clearFetchXapSpecialsCompanyProductsData",
  };
};
