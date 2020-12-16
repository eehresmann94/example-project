import React from 'react';
import {useRoutes} from "react-router-dom";
import GlobalStyles from "../theme/GlobalStyles";
import {ThemeProvider} from '@material-ui/core';
import {darkTheme, lightTheme} from "../theme/themes";
import routes from "../routes";
import {useSelector} from "react-redux";
import {RootState} from "../redux/rootReducer";


function App() {
  const themeMode = useSelector((state: RootState) => state.UserReducer.isDarkMode)
  const routing = useRoutes(routes);
  return (
      <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>
        <GlobalStyles/>
        {routing}
      </ThemeProvider>
  );
}

export default App;
