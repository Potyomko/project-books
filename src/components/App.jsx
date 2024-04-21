// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { Outlet } from "react-router-dom";
// import { Training } from "./Training/Training";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Register } from "./Authentication/Register";
import { Training } from "./Training/Training";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../redux/auth/operation";
import { UserMenu } from "./Authentication/UserMenu";

export const App = ()=> {


    

 
  return (
    <>

{/*     
     {isLoggedIn ? <UserMenu/> :  <AuthMenu/> } */}
     <UserMenu/>
    <Outlet/> 
     {/* <Training/> */}
    </>
    
  );
};