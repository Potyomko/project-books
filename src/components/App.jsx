// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { Outlet } from "react-router-dom";
// import { Register } from "./Authentication/Register";
import { Training } from "./Training/Training";
import {BookForm} from './AddBook/BookForm'
import {BookList} from './AddBook/BookList'
// import { Statistics } from "./Statistics/Statistics";
// import { Login } from "./Authentication/Login";
import { UserMenu } from "./Authentication/UserMenu";

export const App = ()=> {
  return (
    <>
{/*    
     {isLoggedIn ? <UserMenu/> :  <AuthMenu/> } */}
     <h1>My Bookshelf</h1>
      <BookForm />
      <BookList />
      {/* <Register /> */}
      {/* <Login/> */}
      <Training />
      {/* <Statistics /> */}
      <Outlet/> 
     <UserMenu/>
    </>
  );
};