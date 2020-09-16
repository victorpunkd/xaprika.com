const appliedCouponCodeReducer = (state = "", action) => {
  switch (action.type) {
    case "applyCouponCode":
      return action.payLoad;
    case "clearCouponCode":
      return "";
    default:
      return state;
  }
};

export default appliedCouponCodeReducer;
