import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../auth/axiosConfig";

// axios.defaults.baseURL = 'https://6624fee904457d4aaf9d868a.mockapi.io/';

export const updateStartDate = createAsyncThunk(
  "training/updateStartDate",
  async (startDate) => {
    try {
      const response = await axios.put("/start-date", { startDate });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const updateFinishDate = createAsyncThunk(
  "training/updateFinishDate",
  async (finishDate) => {
    try {
        const response = await axios.put("/finish-date", { finishDate });
        console.log(finishDate);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const addNewChekout = createAsyncThunk(
  "training/addNewChekout",
  async (chekoutData, trId) => {
    try {
      console.log(trId);
      const getting = await axios.get(`/training/${trId}`);
      const checkout = getting.data.checkout
      
      checkout.push(chekoutData)  
        await axios.put(`/training/${trId}`, {checkout});
      return chekoutData;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const addBook = createAsyncThunk(
  "training/addBook",
  async (bookData) => {
    try {
      // const response = await axio
      return bookData;
    } catch (error) {
      return error.response.data;
    }
  }
)

export const markAsCompleted = createAsyncThunk(
  "training/markAsCompleted",
  async (bookId, trId) => {
    try {
    
      const getting = await axios.get(`/training/${trId}`);
    const books = getting.data.selectedBooks
      
      books.forEach(book => {
        if (book.id  === bookId && book.status === "reading"){
          book.status = "completed"
        } else  if (book.id  === bookId && book.status === "completed"){
          book.status = "reading"
        }
      })
      
      await axios.put(`/training/${trId}`, {selectedBooks: books});
      return bookId;
    } catch (error) {
      return error.response.data;
    }
  }
)

export const getTreaningData = createAsyncThunk(
  "training/getTreaningData",
  async () => {
    try {
      const response = await axios.get("/training");
      const current = localStorage.getItem('id');
      let neededData = ''
      response.data.forEach(train => { console.log(train);if(train.userId === `userId ${current}`){
        neededData = train
      }});
      console.log(response.data)
      return neededData

    } catch (error) {
      return error.response.data;
    }
  }
);
