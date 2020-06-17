import { combineReducers } from "redux";
import activePage from "./ActivePageReducer";
import isUerOptionSideBarVisible from "./UserOptionSideBarShowReducer";
import isSideBarVisible from "./SideBarShowReducer";
import isUserOptionSideBarVisible from "./UserOptionSideBarShowReducer";

export default combineReducers({
  activePage,
  isUerOptionSideBarVisible,
  isSideBarVisible,
  isUserOptionSideBarVisible,
});
