import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";
import { Container } from "components/GlobalStyle";
import { AuthContainer, BackroundAuth, ContainerText, FormUl, LabelForm, RegisterButton, RegisterForm, RegisterH1, RegisterH2, RegisterIMG, RegisterInput, RegisterLi, RegisterP, RegisterUL } from "./StyledAuth/Register.styled";
import { register } from "../../redux/auth/operation";
 import Logologin from './img/“.svg'
 import LineLogin from './img/Line 1.svg'
import { LineLoginIMG, LoginAuthor, LoginContainer, LoginIMG, LoginText } from "./StyledAuth/Login.styled";

export const Login = () => {
   const dispatch = useDispatch();
   
  

//    const handleSubmit = (e) => {
//       e.preventDefault();
//       const form = e.currentTarget;
//       dispatch(register({
//          name: form.name.value, 
//          email: form.email.value,
//          password: form.password.value
//       }))
//          .then(() => {
//             console.log("Data submitted successfully!");
//             // Опціонально: виконати будь-які додаткові дії після успішної відправки даних
//          })
//          .catch((error) => {
//             console.error("Error submitting data:", error);
//             // Опціонально: обробити помилку
//          });
    
      
//    };

   return (
      <section>
         <Container>
            <BackroundAuth>
               <LoginContainer>
               <RegisterForm >
   
   <LabelForm>
      Електронна адреса  <span>*</span>
      <RegisterInput
         id="email"
         placeholder="E-mail"
         type="email"
      />
   </LabelForm>
   <LabelForm>
      Пароль  <span>*</span>
      <RegisterInput
         id="password"
         placeholder="Password"
         type="password"
      />
   </LabelForm>
   
   <RegisterButton type="submit">Увійти</RegisterButton>
</RegisterForm>
<FormUl>
   
   <li> <NavLink to='/register'>Зареєструватися</NavLink></li>
</FormUl>
    
     
               </LoginContainer>
          
            </BackroundAuth>
            <ContainerText>
          

           <LoginIMG src={Logologin} alt="" />

       <LoginText>
       Книги - це кораблі думки, що мандрівні хвилями часу і дбайливо несуть свій дорогоцінний вантаж від покоління до покоління.
       </LoginText>
       <LineLoginIMG src={LineLogin} alt="" />

       <LoginAuthor>Бэкон Ф.</LoginAuthor>
            </ContainerText>
        
      
         </Container>

      </section>
      
   );
};