import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operation";

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,

        }, 
        token: null,
        isLoggedIn: true,
        isReFreshing: false,

    },
    extraReducers(builder){
       builder
       .addCase(register.fulfilled, (state, action)=>{
        console.log(action.payload);
        state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    })
    .addCase(login.fulfilled, (state, action )=>{
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
    })
    .addCase(logout.fulfilled,(state,  )=>{
        state.user = null
        state.token = null
        state.isLoggedIn = false
    } )
    .addCase(refreshUser.pending ,(state,action  )=>{
       
        state.isReFreshing = true
    } )
    .addCase(refreshUser.rejected,(state,action  )=>{
       
        state.isReFreshing = false
    } )
    .addCase(refreshUser.fulfilled ,(state,action  )=>{
        state.user = action.payload
        state.token = action.payload
        state.isLoggedIn = true
        state.isReFreshing = false
    } )


    }

    

       
    
})

export const AuthReducer = AuthSlice.reducer