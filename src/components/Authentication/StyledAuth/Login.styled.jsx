
import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const LoginContainer = styled.div`
   width: 400px;
   height: 420px;
   background: white;
   position: relative;
   padding-bottom: 20px;

   // Додано медіа-запит для планшетів і телефонів
   @media only screen and (max-width: 720px) {

      height: auto; // Змінено висоту на автоматичну
   }
`

export const LoginText = styled.p`
    
    font-family: Montserrat;
font-size: 24px;
font-weight: 500;
line-height: 38px;
text-align: center;
color: #242A37;
width: 397px;

`

export const LoginIMG = styled.img`

justify-content: center;
align-items: Center;
margin-left: 180px;
`

export const LineLoginIMG = styled.img`
margin-left: 120px;

`


export const LoginAuthor = styled.p`
    font-family: Montserrat;
font-size: 14px;
font-weight: 500;

text-align: left;
color: #898F9F;
margin-left: 160px;


`