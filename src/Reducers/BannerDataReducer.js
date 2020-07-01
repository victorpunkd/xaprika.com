let bannerState = {
  isLoaded: false,
  data: [],
};
const bannerData = (state = bannerState, action) => {
  switch (action.type) {
    case "fetchBannerData":
      return { isLoaded: true, data: action.payLoad };
    default:
      return state;
  }
};

export default bannerData;
