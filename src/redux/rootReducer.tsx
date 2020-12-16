import { combineReducers } from "redux";
import UserReducer from "./reducers/userReducer";


export const rootReducer = combineReducers({
  UserReducer: UserReducer
});
export type RootState = ReturnType<typeof rootReducer>;