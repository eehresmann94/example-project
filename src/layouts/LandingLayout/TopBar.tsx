import React from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  makeStyles, IconButton
} from '@material-ui/core';
import {Brightness2Sharp, Brightness7Sharp} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {changeThemeMode} from "../../redux/actions/userActions";

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64
  }
}));

const TopBar = ({ className, theme, ...rest }: TopBarProps) => {
  const themeMode = useSelector((state: RootState) => state.UserReducer.isDarkMode)
  const dispatch = useDispatch();
  const classes = useStyles();
  const icon = !theme ? <Brightness7Sharp/> : <Brightness2Sharp/>;

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
        edge="end"
        color='inherit'
        onClick={() => selectThemeMode()}
        >
          {icon}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

interface TopBarProps {
  className?: string;
  theme: boolean;
};

export default TopBar;