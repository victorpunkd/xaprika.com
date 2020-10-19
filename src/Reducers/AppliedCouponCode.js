let appliedCouponInfo = {
  coupon: "",
  description: "",
};

const appliedCouponCodeReducer = (state = appliedCouponInfo, action) => {
  switch (action.type) {
    case "applyCouponCode":
      return {
        coupon: action.payLoadcouponCode,
        description: action.payLoadcouponDescription,
      };
    case "clearCouponCode":
      return "";
    default:
      return state;
  }
};

export default appliedCouponCodeReducer;
