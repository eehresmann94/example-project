import React, {useState} from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import {Brightness2Sharp, Brightness7Sharp} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {changeThemeMode} from "../../redux/actions/userActions";


interface TopBarProps {
  className?: string;
  onMobileNavOpen: any;
  rest?: any;
};


const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({className, onMobileNavOpen, ...rest}: TopBarProps) => {
  const classes = useStyles();
  const themeMode = useSelector((state: RootState) => state.UserReducer.isDarkMode)
  const dispatch = useDispatch();
  const [notifications] = useState([]);
  const icon = !themeMode ? <Brightness2Sharp/> : <Brightness7Sharp/>;

  const selectThemeMode = () => {
    dispatch(changeThemeMode(!themeMode));
  }

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <Box flexGrow={1}/>
        <IconButton
          color='inherit'
          onClick={() => selectThemeMode()}
        >
          {icon}
        </IconButton>
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon/>
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon/>
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon/>
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;