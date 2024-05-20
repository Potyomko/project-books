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

export const AuthContainer = styled.div`
  width: 430px;
  height: 560px;
  background: white;
  position: relative;
  padding-bottom: 20px;



  @media only screen and (max-width: 720px) {
    height: auto;
  }
`;

export const RegisterInput = styled.input`
  width: 320px;
  height: 42px;
  border: 1px solid #1D1D1B26;
  box-shadow: 0px 1px 2px 0px #1D1D1B26 inset;
  background: #F5F7FA;
  display: block;
  margin: 10px auto;
  padding-left: 15px;
`;

export const RegisterButton = styled.button`
  width: 320px;
  height: 60px;
  color: #FFFFFF;
  background: #FF6B08;
  display: block;
  margin: 10px auto;
  border: 0px;
  margin-top: 20px;
`;

export const LoginLink = styled(NavLink)`
  color: #FF6B08;
  text-decoration: none;
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

export const FormUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  & > li:not(:last-child) {
    margin-right: 5px;
  }
`;

export const RegisterForm = styled.form`
  margin-top: 80px;


`;

export const LabelForm = styled.label`
  margin-left: 50px;
  color: #898F9F;
`;

export const RegisterH1 = styled.h1`
  font-family: Abril Fatface;
  font-size: 34px;
  font-weight: 400;
  line-height: 38px;
  text-align: left;
  color: #242A37;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  margin-bottom: 100px;

  @media only screen and (max-width: 1200px) {
    margin-left: 0;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const RegisterH2 = styled.h2`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  margin-left: -20px;

  @media only screen and (max-width: 1200px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const RegisterUL = styled.ul`
  list-style: none;
  margin-top: 50px;

  @media only screen and (max-width: 1200px) {
    margin-top: 20px;
    padding: 0;
  }
`;

export const RegisterP = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: #898F9F;
`;

export const RegisterLi = styled.li`
  display: flex;

  @media only screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

export const RegisterIMG = styled.img`
  margin-right: 5px;
`;
