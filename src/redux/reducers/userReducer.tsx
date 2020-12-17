import produce from "immer";
import {Action} from "../../models/Redux";
import {User} from "../../models/User";


export const defaultState: User = {
  isDarkMode: false,
  isLoggedIn: false,
};

const UserReducer = produce((state = defaultState, action: Action) => {
  switch (action.type) {
    case "SET_THEME_MODE":
      state.isDarkMode = action.payload;
      break;
    case "SIGN_IN_SUCCESS":
      state.isLoggedIn = action.payload;
      break;
    default:
      return state;
  }
}, defaultState);

export default UserReducer;