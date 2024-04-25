import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from './axiosConfig';



const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };


  export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkApi) => {
   try {
     const res = await axios.get('/users');
     return res.data;
   } catch (error) {
     thunkApi.rejectWithValue('Упс Помилка');
   }
 });


 export const register = createAsyncThunk('auth/signup', async (body, thunkApi)=>{
   try{
      const res = await axios.post('/users', body);
      setAuthHeader(res.data.token);
      
      // Отримати idBooks з відповіді сервера
      const id = res.data.id;

      // Записати idBooks в локальне сховище
      localStorage.setItem('id', id);

      return res.data;
   } catch(error){
      thunkApi.rejectWithValue(error.messages);
   }
})
export const login = createAsyncThunk('auth/login', async (body, thunkApi)=>{
   console.log(body);
    try{
       
      // Отримати idBooks з відповіді сервера
      const id = body.id;

      // Записати idBooks в локальне сховище
      localStorage.setItem('id', id); 

     const res =  await axios.put(`/users/${id}`, { IsLoggedIn: true });
     setAuthHeader(res.data.token)
     return res.data
    } catch(error){
 thunkApi.rejectWithValue(error.messages)
    }
     
 })
     
 
 export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
   try {
     // Отримати ідентифікатор користувача з локального сховища
     const userId = localStorage.getItem('id');
 console.log(userId);
     // Перевірити, чи ідентифікатор користувача не пустий
    
       // Встановити IsLoggedIn на false для користувача з використанням userId
       await axios.put(`/users/${userId}`, { IsLoggedIn: false });
 
       // Видалити ідентифікатор користувача з локального сховища
       localStorage.removeItem('id');
   
 
     // Очистити токен з заголовка
     clearAuthHeader();
   } catch (error) {
     thunkApi.rejectWithValue(error.message);
   }
 });


export const refreshUser =  createAsyncThunk('auth/refresh', async (_, thunkApi)=>{
   try{
const state = thunkApi.getState()

if(state.auth.token === null) return thunkApi.rejectWithValue('щось відсутнє')
setAuthHeader(state.auth.token)
const res = await axios.get('users/me')
return res.data
   } catch(error) {
thunkApi.rejectWithValue(error.messages)
   }
})