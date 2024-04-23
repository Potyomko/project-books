// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { Outlet } from "react-router-dom";
// import { Training } from "./Training/Training";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Register } from "./Authentication/Register";
import { Training } from "./Training/Training";
import {BookForm} from './AddBook/BookForm'
import {BookList} from './AddBook/BookList'

export const App = ()=> {


 
  return (
    <>

{/*    
     {isLoggedIn ? <UserMenu/> :  <AuthMenu/> } */}
    <Outlet/> 
     {/* <Training/> */}
     <h1>My Bookshelf</h1>
      <BookForm />
      <BookList />
     
    </>
    
  );
};