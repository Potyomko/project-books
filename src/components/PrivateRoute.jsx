import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsReFreshing } from "../redux/auth/selectors";
import { fetchUser } from "../redux/auth/operation";


const PrivateRoute = ({component: Component, redirecTo }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
     dispatch(fetchUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const localUserId = localStorage.getItem("id");

  // Перевіряємо, чи користувач увійшов в систему або чи є `id` у локальному сховищі
  const userIsLoggedIn = isLoggedIn || localUserId;


  return  userIsLoggedIn  ? <Component /> : <Navigate to={redirecTo} />;
};
export default PrivateRoute;