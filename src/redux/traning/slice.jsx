import { createSlice, } from "@reduxjs/toolkit";
import { updateFinishDate, updateStartDate, addNewChekout } from "./operation";


const trainingSlice = createSlice({
  name: "training", 
  initialState: {
      startDate: '2024-04-22', 
      finishDate: '2024-05-05',
      books: [], 
      checkout: [
        // поки не продумала наповнення
      ],
      prevChekout: [],
      isStarted: true
      
  },
extraReducers(builder) {
  builder
    .addCase(updateStartDate.fulfilled, (state, action) => {
      state.startDate = action.payload;
    })
    .addCase(updateFinishDate.fulfilled, (state, action) => {
      state.finishDate = action.payload;
    })
    .addCase(addNewChekout.fulfilled, (state, action) => {
      state.checkout.push(action.payload);
    });
}
});


// export const {} = trainingSlice.actions;
export const traningReducer =  trainingSlice.reducer;
