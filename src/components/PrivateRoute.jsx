import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsReFreshing } from "../redux/auth/selectors";


const PrivateRoute = ({component: Component, redirecTo }) => {
 
const isLoggIn = useSelector(selectIsLoggedIn)
const isRefreshing = useSelector(selectIsReFreshing)
 
const isAuthenticated = isLoggIn  && isRefreshing

  return isAuthenticated ? <Component /> : <Navigate to={redirecTo} />;
};
export default PrivateRoute;