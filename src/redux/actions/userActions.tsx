export const changeThemeMode = (newTheme: boolean) => (dispatch: any) => {
  dispatch({
    type: "SET_THEME_MODE",
    payload: newTheme
  })
}