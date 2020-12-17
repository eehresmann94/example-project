import React from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  makeStyles, IconButton, Typography
} from '@material-ui/core';
import {Brightness2Sharp, Brightness7Sharp} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import { Link as RouterLink } from 'react-router-dom';
import {RootState} from "../../redux/rootReducer";
import {changeThemeMode} from "../../redux/actions/userActions";

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 64
  },
  item: {
    flex: '0 0 auto',
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  }

}));

const TopBar = ({ className, theme, ...rest }: TopBarProps) => {
  const themeMode = useSelector((state: RootState) => state.UserReducer.isDarkMode)
  const dispatch = useDispatch();
  const classes = useStyles();
  const icon = !theme ? <Brightness2Sharp/> : <Brightness7Sharp/>;

  const selectThemeMode = () => {
    dispatch(changeThemeMode(!themeMode));
  }

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
        className={classes.item}
        color='inherit'
        onClick={() => selectThemeMode()}
        >
          {icon}
        </IconButton>
        <RouterLink className={classes.item} to={'/login'}>
          <Typography>Login</Typography>
        </RouterLink>
        <RouterLink className={classes.item} to={'/register'}>
          <Typography>Signup</Typography>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

interface TopBarProps {
  className?: string;
  theme: boolean;
};

export default TopBar;