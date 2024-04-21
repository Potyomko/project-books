import { createSlice, } from "@reduxjs/toolkit";
import { updateFinishDate, updateStartDate } from "./operation";


const trainingSlice = createSlice({
  name: "training", 
  initialState: {
      startDate: null, 
      finishDate: null,
      books : [
        { id: 1, title: "The Great Gatsby" },
        { id: 2, title: "To Kill a Mockingbird" },
        { id: 3, title: "1984" },
        { id: 4, title: "Pride and Prejudice" },
        { id: 5, title: "The Catcher in the Rye" }
      ],
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
export const trainingReducer =  trainingSlice.reducer;
