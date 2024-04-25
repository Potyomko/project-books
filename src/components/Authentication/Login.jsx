import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Container } from "components/GlobalStyle";
import { AuthContainer, BackroundAuth, ContainerText, FormUl, LabelForm, RegisterButton, RegisterForm, RegisterH1, RegisterH2, RegisterIMG, RegisterInput, RegisterLi, RegisterP, RegisterUL } from "./StyledAuth/Register.styled";
import Logologin from './img/“.svg';
import LineLogin from './img/Line 1.svg';
import { LineLoginIMG, LoginAuthor, LoginContainer, LoginIMG, LoginText } from "./StyledAuth/Login.styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchUsers, login, register } from "../../redux/auth/operation";

export const Login = () => {
   const dispatch = useDispatch();
   const users = useSelector(state => state.auth.items);
   useEffect(() => {
      dispatch(fetchUsers());
   }, [dispatch]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const email = form.email.value;
      const password = form.password.value;
      
      // Перевірка, чи існує користувач з введеним email
      const user = users.find(user => user.email === email);
      console.log(user);
   
      if (!user) {
         // Якщо користувача з введеним email не знайдено, вивести повідомлення про помилку
         toast.error("Користувача з введеним email не знайдено!");
         return;
      }
   
      // Перевірка співпадіння паролів
      if (user.password !== password) {
         // Якщо пароль не співпадає, вивести повідомлення про помилку
         toast.error("Неправильний пароль!");
         return;
      }
   
      // Якщо користувач і пароль існують, диспачимо вхід
      dispatch(login({
         id: user.id,
         email: email,
         password: password,
      }))
         .then(() => {
            console.log("Успішний вхід!");
            // Опціонально: виконати будь-які додаткові дії після успішного входу
         })
         .catch((error) => {
            console.error("Помилка при вході:", error);
            // Опціонально: обробити помилку
         });
   };

   return (
      <section>
         <Container>
            <BackroundAuth>
               <LoginContainer>
                  <RegisterForm onSubmit={handleSubmit}>
                     <LabelForm>
                        Електронна адреса <span>*</span>
                        <RegisterInput
                           id="email"
                           name="email"
                           placeholder="E-mail"
                           type="email"
                        />
                     </LabelForm>
                     <LabelForm>
                        Пароль <span>*</span>
                        <RegisterInput
                           id="password"
                           name="password"
                           placeholder="Пароль"
                           type="password"
                        />
                     </LabelForm>
                     <RegisterButton type="submit">Увійти</RegisterButton>
                  </RegisterForm>
                  <FormUl>
                     <li><NavLink to='/'>Зареєструватися</NavLink></li>
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
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
      </section>
   );
};