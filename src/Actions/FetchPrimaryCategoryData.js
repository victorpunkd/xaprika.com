export const fetchPrimarycategoryData = () => (dispatch) => {
  fetch("http://localhost:8080/api/getAllPrimaryCategoryData")
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: "fetchPrimarycategoryData",
        payLoad: posts,
      })
    );
};
