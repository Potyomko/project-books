// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { Outlet } from "react-router-dom";

import axios from 'axios';
import { useEffect, useState } from "react";
import { Register } from "./Authentication/Register";

export const App = ()=> {


 
  return (
    <>

{/*     
     {isLoggedIn ? <UserMenu/> :  <AuthMenu/> } */}
    <Outlet/> 
    

    </>
    
  );
};