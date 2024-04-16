// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { Outlet } from "react-router-dom";
// import { Training } from "./Training/Training";

import axios from 'axios';
import { useEffect, useState } from "react";
import { Training } from "./Training/Training";

export const App = ()=> {
  const [books, setBooks] = useState([]);

 
  return (
    <>
{/*     
     {isLoggedIn ? <UserMenu/> :  <AuthMenu/> } */}
    <Outlet/> 
     <Training/>
    </>
    
  );
};