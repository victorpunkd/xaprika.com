const isSideBarVisible = (state = false, action) => {
  switch (action.type) {
    case "toggleVisibility":
      return !state;
    case "hideSideBar":
      return false;
    default:
      return state;
  }
};

export default isSideBarVisible;
