const activePage = (state = "HomePage", action) => {
  switch (action.type) {
    case "changePage":
      return action.payLoad;
    default:
      return state;
  }
};

export default activePage;
