import { createAsyncThunk } from "@reduxjs/toolkit";

export const addBook = createAsyncThunk(
    "library/addBook",
    async (bookData) => {
      try {
        // const response = await axio
        return bookData;
      } catch (error) {
        return error.response.data;
      }
    }
  )

  export const markAsRead = createAsyncThunk(
    "library/markAsRead",
    async (bookId) => {
      try {
        // const response = await axio
        return bookId;
      } catch (error) {
        return error.response.data;
      }
    }
  )