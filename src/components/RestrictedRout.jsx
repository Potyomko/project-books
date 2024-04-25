import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsReFreshing } from "../redux/auth/selectors";
import { fetchUser } from "../redux/auth/operation";

const RestrictedRouter = ({component: Component, redirecTo }) => {
  const dispatch = useDispatch();
  const localUserId = localStorage.getItem("id");
  useEffect(() => {
    if (localUserId) {
      dispatch(fetchUser());
    }
    else{
      return
    }
     
  }, [dispatch]);

  const isLoggedIn = useSelector(state => state.auth.userObj);


  // Перевіряємо, чи користувач увійшов в систему або чи є `id` у локальному сховищі
  const userIsLoggedIn = isLoggedIn || localUserId;

  return userIsLoggedIn ? <Component /> : <Navigate to={redirecTo} />;
};
export default RestrictedRouter;