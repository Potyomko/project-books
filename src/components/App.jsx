// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { Outlet } from "react-router-dom";
// import { Training } from "./Training/Training";
// import { Register } from "./Authentication/Register";
import { Training } from "./Training/Training";
// import { Statistics } from "./Statistics/Statistics";
// import { Login } from "./Authentication/Login";
import { UserMenu } from "./Authentication/UserMenu";

export const App = ()=> {


    

 
  return (
    <>
      {/* <Register /> */}
      {/* <Login/> */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthMenu />} */}
      <Training />
      {/* <Statistics /> */}
      <Outlet/> 
     <UserMenu/>
    <Outlet/> 
    </>
  );
};