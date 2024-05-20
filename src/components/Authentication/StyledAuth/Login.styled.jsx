import styled from "styled-components";
import AuthBackround from '../img/pic.jpg';
import { NavLink } from "react-router-dom";

export const BackroundAuth = styled.div`
  width: 565px;
  height: 650px; 
  background-color: #2f303a;
  background-image: linear-gradient(
    to right,
    rgba(9, 30, 63, 0.8),
    rgba(9, 30, 63, 0.8)
  ),
  url(${AuthBackround});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 1px;
  @media only screen and (max-width: 1200px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto; /* Центрування */



  }
  
`;

export const ContainerText = styled.div`
  position: absolute;
  right: 280px;
  top: 50%;
  transform: translateY(-50%);

  @media only screen and (max-width: 1200px) {
    position: static;
    transform: none;
    margin-top: 20px;
    text-align: center;
  }

  @media only screen and (max-width: 720px) {
  
  }
`;
export const AuthContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: flex-start;

   @media only screen and (max-width: 720px) {
      flex-direction: column;
      align-items: center;
   }
`;

export const LoginContainer = styled.div`
   width: 400px;
   height: 420px;
   background: white;
   position: relative;
   padding-bottom: 20px;

   @media only screen and (max-width: 720px) {
    
      margin-bottom: 20px;
   }
`;

export const LoginText = styled.p`
   font-family: Montserrat;
   font-size: 24px;
   font-weight: 500;
   line-height: 38px;
   text-align: center;
   color: #242A37;
   width: 397px;

   @media only screen and (max-width: 720px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;



   }
`;

export const LoginIMG = styled.img`
   justify-content: center;
   align-items: Center;

   @media only screen and (max-width: 720px) {
position: relative;

 justify-content: center;
 align-items: center;
   }
`;

export const LineLoginIMG = styled.img`
   margin-left: 120px;

   @media only screen and (max-width: 720px) {
      margin: 0 auto;
      display: block;
   }
`;

export const LoginAuthor = styled.p`
   font-family: Montserrat;
   font-size: 14px;
   font-weight: 500;
   text-align: left;
   color: #898F9F;
   margin-left: 160px;

   @media only screen and (max-width: 720px) {
      text-align: center;
      margin: 10px auto;
   }
`;
