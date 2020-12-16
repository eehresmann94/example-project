import {colors, createMuiTheme} from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light'
  },
  shadows,
  typography
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: colors.grey[900]
    },
    secondary: {
      main: colors.teal[500]
    }
  },
  shadows,
  typography
});