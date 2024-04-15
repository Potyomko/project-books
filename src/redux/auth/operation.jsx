import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



// const setAuthHeader = token => {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   };
//   const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';
//   };


export const register = createAsyncThunk('books/register', async (data, thunkAPI) => {
   try {
      const res = await axios.post('/api/books', data);
      return res.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
   }
});

// export const login = createAsyncThunk('auth/login', async (body, thunkApi)=>{
//    console.log(body);
//     try{
//      const res = await axios.post('users/login', body)
//      setAuthHeader(res.data.token)
//      return res.data
//     } catch(error){
//  thunkApi.rejectWithValue(error.messages)
//     }
     
//  })
// export const logout = createAsyncThunk('auth/logout', async (_, thunkApi)=>{
//    try{
//    await axios.post('users/logout')
//     clearAuthHeader()
//    } catch(error){
// thunkApi.rejectWithValue(error.messages)
//    }
    
// } )


// export const refreshUser =  createAsyncThunk('auth/refresh', async (_, thunkApi)=>{
//    try{
// const state = thunkApi.getState()

// if(state.auth.token === null) return thunkApi.rejectWithValue('щось відсутнє')
// setAuthHeader(state.auth.token)
// const res = await axios.get('users/me')
// return res.data
//    } catch(error) {
// thunkApi.rejectWithValue(error.messages)
//    }
// })