import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";
import { Container } from "components/GlobalStyle";
import { AuthContainer, BackroundAuth, ContainerText, FormUl, LabelForm, RegisterButton, RegisterForm, RegisterH1, RegisterH2, RegisterIMG, RegisterInput, RegisterLi, RegisterP, RegisterUL } from "./StyledAuth/Register.styled";
import { register } from "../../redux/auth/operation";
 import LogoRegister from './img/Vector.svg'

export const Register = () => {
   const dispatch = useDispatch();
   
  

   const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(register({
         name: form.name.value, 
         email: form.email.value,
         password: form.password.value
      }))
         .then(() => {
            console.log("Data submitted successfully!");
            // Опціонально: виконати будь-які додаткові дії після успішної відправки даних
         })
         .catch((error) => {
            console.error("Error submitting data:", error);
            // Опціонально: обробити помилку
         });
    
      
   };

   return (
      <section>
         <Container>
            <BackroundAuth>
               <AuthContainer>
               <RegisterForm onSubmit={handleSubmit}>
   <LabelForm htmlFor="username">
      Ім’я <span>*</span>
      <RegisterInput
         placeholder="Username"
         id="username"
         type="text"
      />
   </LabelForm>
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
   <LabelForm>
      Підтвердити пароль  <span>*</span>
      <RegisterInput
         id="confirmPassword"
         placeholder="Confirm Password"
         type="password"
      />
   </LabelForm>
   <RegisterButton type="submit">Зареєструватися</RegisterButton>
</RegisterForm>
<FormUl>
   <li>  <p>Вже знами?</p> </li>
   <li> <NavLink to='/login'>Увійти</NavLink></li>
</FormUl>
    
     
               </AuthContainer>
          
            </BackroundAuth>
            <ContainerText>
            <RegisterH1>Books Reading</RegisterH1>

           

        <RegisterUL>
         <li>
         <RegisterH2>Допоможе вам</RegisterH2>
         </li>
         <RegisterLi>
         <RegisterIMG src={LogoRegister} alt=''/>
            <RegisterP>
            Швидше сформулювати свою ціль і розпочати читати
            </RegisterP>
            </RegisterLi>
         <RegisterLi>
         <RegisterIMG src={LogoRegister} alt=''/>
            <RegisterP>
            Пропорційно розподілити навантаження на кожний день
            </RegisterP>
            </RegisterLi>
         <RegisterLi>
         <RegisterIMG src={LogoRegister} alt=''/>
            <RegisterP>
            Відстежувати особистий успіх
            </RegisterP>
            </RegisterLi>
        </RegisterUL>
  
  <RegisterUL>
   <li><RegisterH2>
   Також ви зможете 
   </RegisterH2></li>
   <RegisterLi>
      <RegisterIMG src={LogoRegister} alt=''/>
      <RegisterP>  Формувати особисту думку незалежну від інших</RegisterP>
   </RegisterLi>
   <RegisterLi>
   <RegisterIMG src={LogoRegister} alt=''/>
      <RegisterP>Підвищити свої професійні якості опираючись на нові знання</RegisterP>
   </RegisterLi>
   <RegisterLi>
   <RegisterIMG src={LogoRegister} alt=''/>
      <RegisterP>Стати цікавим співрозмовником</RegisterP>
   </RegisterLi>  </RegisterUL>
            </ContainerText>
        
      
         </Container>

      </section>
      
   );
};