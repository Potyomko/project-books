import { createSlice, } from "@reduxjs/toolkit";


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
  // extraReducers(builder){
  //   builder

  // },
 
});


// export const {} = trainingSlice.actions;
export const traningReducer =  trainingSlice.reducer;
