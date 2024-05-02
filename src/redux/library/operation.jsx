import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../auth/axiosConfig";

export const addBook = createAsyncThunk('book/addBook', async (bookData, thunkApi) => {
    try {
    // Отримуємо ідентифікатор користувача з локального сховища
    const userId = localStorage.getItem('id');
    
    // Отримуємо існуючі книги користувача
    const { data: userData } = await axios.get(`/users/${userId}`);
    
    // Додаємо нову книгу до масиву книг користувача
    userData.Books.push(bookData);
    
    // Оновлюємо дані користувача у базі даних з новим масивом книг
    await axios.put(`/users/${userId}`, userData);
    
    // Повертаємо дані про додану книгу
    return bookData;
    } catch (error) {
    thunkApi.rejectWithValue(error.message);
    }});

  export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkApi) => {
try {
const userId = localStorage.getItem('id');
const res = await axios.get(`/users/${userId}/Books`);
console.log(res.data);
return res.data;
} catch (error) {
// Важливо повертати дані навіть у випадку помилки, щоб `rejectWithValue` мав, що повертати
return thunkApi.rejectWithValue('Упс, помилка');
}
});