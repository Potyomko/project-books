// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { Outlet } from "react-router-dom";

import axios from 'axios';
import { useEffect, useState } from "react";
import { Register } from "./Authentication/Register";

export const App = ()=> {


 
  return (
    <>
    <Register/>
{/*     
     {isLoggedIn ? <UserMenu/> :  <AuthMenu/> } */}
    <Outlet/> 
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
    </>
    
  );
};