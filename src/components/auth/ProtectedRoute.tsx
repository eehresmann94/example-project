import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {Navigate} from "react-router-dom";

const ProtectedRoute = () => {
  const loggedInStatus: boolean = useSelector((state: RootState) => state.UserReducer.isLoggedIn);

  const checkLoginStatus = () => {
    if(loggedInStatus) {
      return <></>
    } else {
      return <Navigate to={'/login'} />
    }
  }

  return (
    <>
    { checkLoginStatus() }
    </>
  );
};


export default ProtectedRoute;