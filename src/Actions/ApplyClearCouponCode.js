export const applyCouponCodeAction = (couponCode) => {
  return {
    type: "applyCouponCode",
    payLoad: couponCode,
  };
};

export const clearAppliedCouponCodeAction = () => {
  return {
    type: "clearCouponCode",
  };
};
