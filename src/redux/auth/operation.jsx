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
    const res = await axios.post('/users', body)
    setAuthHeader(res.data.token)
    return res.data
   } catch(error){
thunkApi.rejectWithValue(error.messages)
   }
    
})

export const login = createAsyncThunk('auth/login',  (body, thunkApi)=>{
   console.log(body);
    try{
     const res = body
     setAuthHeader(res.data.token)
     return res.data
    } catch(error){
 thunkApi.rejectWithValue(error.messages)
    }
     
 })
export const logout = createAsyncThunk('auth/logout', async (_, thunkApi)=>{
   try{
   await axios.put('/users')
    clearAuthHeader()
   } catch(error){
thunkApi.rejectWithValue(error.messages)
   }
    
} )


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