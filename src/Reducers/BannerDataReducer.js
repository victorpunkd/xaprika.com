let bannerState = {
  isLoaded: false,
  data: [],
  error: false,
  errorMessage: [],
};
const bannerData = (state = bannerState, action) => {
  switch (action.type) {
    case "fetchBannerData":
      return {
        isLoaded: true,
        data: action.payLoad,
        error: false,
        errorMessage: [],
      };
    case "fetchBannerDataError":
      return {
        isLoaded: true,
        data: [],
        error: true,
        errorMessage: action.payLoad,
      };
    default:
      return state;
  }
};

export default bannerData;
