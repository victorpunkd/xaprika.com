const isApplyCoupoModalVisibleReducer = (state = false, action) => {
  switch (action.type) {
    case "showApplyCouponModal":
      return true;
    case "hideApplyCouponModal":
      return false;
    default:
      return state;
  }
};

export default isApplyCoupoModalVisibleReducer;
