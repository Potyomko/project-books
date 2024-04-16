import { createSlice, } from "@reduxjs/toolkit";
import { updateFinishDate, updateStartDate } from "./operation";


const trainingSlice = createSlice({
  name: "training", 
  initialState: {
      startDate: null, 
      finishDate: null,
      books: [], 
      checkout: [
        // поки не продумала наповнення
      ]
      
  },
extraReducers(builder) {
  builder
    .addCase(updateStartDate.fulfilled, (state, action) => {
      state.startDate = action.payload;
    })
    .addCase(updateFinishDate.fulfilled, (state, action) => {
      state.finishDate = action.payload;
    });
}
});


// export const {} = trainingSlice.actions;
export const traningReducer =  trainingSlice.reducer;
