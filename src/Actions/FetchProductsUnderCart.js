import { getApiEndpoint } from "../apiEndpoint";

export const fetchProductsUnderCart = (productIds) => (dispatch) => {
  console.log(productIds);
  console.log(
    `${getApiEndpoint()}/api/getProductsByaGroupOfIds/${[...productIds]}`
  );
  fetch(`${getApiEndpoint()}/api/getProductsByaGroupOfIds/${[...productIds]}`)
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: "fetchProductsUnderCart",
        payLoad: posts,
      })
    );
};
