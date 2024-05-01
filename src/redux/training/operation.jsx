import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://65b92f2bb71048505a8a6162.mockapi.io/';

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
  async (chekoutData) => {
    try {
      // const response = await axios.put("/start-date", { startDate });
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
  })

  export const deleteBook = createAsyncThunk(
    "training/deleteBook",
    async (bookData) => {
      try {
        // const response = await axio
        return bookData;
      } catch (error) {
        return error.response.data;
      }
    }
)
