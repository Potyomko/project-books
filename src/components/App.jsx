// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { Outlet } from "react-router-dom";

import axios from 'axios';
import { useEffect, useState } from "react";

export const App = ()=> {
  const [books, setBooks] = useState([]);

 
  return (
    <>
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