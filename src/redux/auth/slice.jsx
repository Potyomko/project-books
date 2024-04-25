import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, login, logout, refreshUser, register } from "./operation";

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            id: null,
            name: null,
            email: null,
            password: null
        }, 
        token: null,
        isLoggedIn: false,
        isReFreshing: false,
        items: [], // Додаємо масив items для зберігання отриманих користувачів
        userObj: []
    },
    extraReducers(builder){
        builder
            .addCase(register.fulfilled, (state, action) => {
                console.log(action.payload);
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(login.fulfilled, (state, action ) => {
              
                state.isLoggedIn = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isReFreshing = true;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isReFreshing = false;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.token = action.payload;
                state.isLoggedIn = true;
                state.isReFreshing = false;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.items = action.payload; // Зберігаємо отриманих користувачів у масиві items
            });
    }
});

export const AuthReducer = AuthSlice.reducer;