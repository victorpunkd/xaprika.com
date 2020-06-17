const isUserOptionSideBarVisible = (state = false, action) => {
  switch (action.type) {
    case "toggleUserOptionSideBarVisibility":
      return !state;
    case "hideUserOptionSideBar":
      return false;
    default:
      return state;
  }
};

export default isUserOptionSideBarVisible;
