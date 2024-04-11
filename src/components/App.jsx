// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { Outlet } from "react-router-dom";

import axios from 'axios';
import { useEffect, useState } from "react";

export const App = ()=> {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/books/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books', error));
  }, []);
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