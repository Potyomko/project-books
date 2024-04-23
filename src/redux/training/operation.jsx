import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://api.example.com'; // Ваша базова URL-адреса API

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
