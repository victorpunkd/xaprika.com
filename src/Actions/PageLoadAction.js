export const changePage = (pageName) => {
  return {
    type: "changePage",
    payLoad: pageName,
  };
};
