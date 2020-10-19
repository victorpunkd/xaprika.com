export const applyCouponCodeAction = (couponCode, couponDescription) => {
  return {
    type: "applyCouponCode",
    payLoadcouponCode: couponCode,
    payLoadcouponDescription: couponDescription,
  };
};

export const clearAppliedCouponCodeAction = () => {
  return {
    type: "clearCouponCode",
  };
};
