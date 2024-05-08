import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../auth/axiosConfig";
import { selectBooks } from "./selectors";

export const fetchBooksSelected = createAsyncThunk('tarining/fetchBooksSelected', async (_, thunkApi) => {
  try {
    const idTraining = localStorage.getItem('idTraining');
    const res = await axios.get(`/training/${idTraining}`);

    
    // Змінено: Повертаємо всі об'єкти з масиву Books
    console.log(res.data);

    return res.data.selectedBooks;
  } catch (error) {
    // Важливо повертати дані навіть у випадку помилки, щоб `rejectWithValue` мав, що повертати
    return thunkApi.rejectWithValue('Упс, помилка');
  }
});

export const updateStartDate = createAsyncThunk("training/updateStartDate", async (body, thunkApi) => {
  try {
    const idTraining = localStorage.getItem('idTraining');
    const startDate = body.startDate
    let response;

    if (idTraining) {
      response = await axios.put(`/training/${idTraining}`, {startDate });
    } else {
      response = await axios.post("/training", body);
      localStorage.setItem('idTraining', response.data.id);
    }

    console.log(response.data);
  
    return response.data.startDate;
  } catch (error) {
    return thunkApi.rejectWithValue('Упс, помилка');
  }
});

export const updateFinishDate = createAsyncThunk("training/updateFinishDate",async (body, thunkApi) => {
    try {
      const idTraining = localStorage.getItem('idTraining');
        const response = await axios.put(`/training/${idTraining}`, { finishDate: body });
        console.log(body);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const addNewChekout = createAsyncThunk("training/addNewChekout", async (chekoutData) => {
    try {
      // const response = await axios.put("/start-date", { startDate });
      return chekoutData;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const addBook = createAsyncThunk("training/addBook", async (body, thunkApi) => {
  try {
    const idTraining = localStorage.getItem('idTraining');
    const { data: trainingData } = await axios.get(`/training/${idTraining}`);
    
    // Оновлення лише масиву selectedBooks
    trainingData.selectedBooks.push(body);
    
    const res = await axios.put(`/training/${idTraining}`, { selectedBooks: trainingData.selectedBooks });
    return res.id;
  } catch (error) {
    return error.response.data;
  }
});

export const deleteBook = createAsyncThunk("training/deleteBook", async (body, thunkApi) => {
  try {
    const idTraining = localStorage.getItem('idTraining');
    const books = thunkApi.getState().training.selectedBooks;
    const deletingBooks = books.filter(book => book.id !== body);
    await axios.put(`/training/${idTraining}`, { selectedBooks: deletingBooks });
  } catch (error) {
    return error.response.data;
  }
});
export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkApi) => {
  try {
    const userId = localStorage.getItem('id');
    const res = await axios.get(`/users/${userId}`);
    console.log(res.data.Books);
    
    // Змінено: Повертаємо всі об'єкти з масиву Books
    return res.data.Books;
  } catch (error) {
    // Важливо повертати дані навіть у випадку помилки, щоб `rejectWithValue` мав, що повертати
    return thunkApi.rejectWithValue('Упс, помилка');
  }
});

export const StartingTraining = createAsyncThunk("training/StartingTraining",async (body, thunkApi) => {
  try {
    const idTraining = localStorage.getItem('idTraining');
      const response = await axios.put(`/training/${idTraining}`, {isStarted: true });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
);

export const fetchTrainingOBJ = createAsyncThunk('training/fetchBooksSelected', async (_, thunkApi) => {
  try {
    const idTraining = localStorage.getItem('idTraining');
    const res = await axios.get(`/training/${idTraining}`);

    
    // Змінено: Повертаємо всі об'єкти з масиву Books
    console.log(res.data);

    return res.data;
  } catch (error) {
    // Важливо повертати дані навіть у випадку помилки, щоб `rejectWithValue` мав, що повертати
    return thunkApi.rejectWithValue('Упс, помилка');
  }
});