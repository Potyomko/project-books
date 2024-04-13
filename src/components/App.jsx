// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { Outlet } from "react-router-dom";
// import { Training } from "./Training/Training";

export const App = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <>
{/*     
     {isLoggedIn ? <UserMenu/> :  <AuthMenu/> } */}
    <Outlet/> 
     {/* <Training/> */}
    </>
    
  );
};
