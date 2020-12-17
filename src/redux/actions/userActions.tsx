import { NavigateFunction } from "react-router"

export const changeThemeMode = (newTheme: boolean) => async (dispatch: any) => {
  dispatch({
    type: "SET_THEME_MODE",
    payload: newTheme
  })
}

export const signIn = (navigate: NavigateFunction) => async (dispatch: any) => {
  await dispatch({
    type: "SIGN_IN_SUCCESS",
    payload: true
  })
  navigate('/app/home', { replace: true });
}