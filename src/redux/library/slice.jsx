import { createSlice, } from "@reduxjs/toolkit";




const filterBook = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return state = action.payload.trim();
    }
  }
});

const bookSlice = createSlice({
  name: "book", 
  initialState:[ 
    // приклад об'єкту однієї книги

  //   {
  //   id:null,
  //   name: null,
  //   author: null,
  //   year:null,
  //   pages: null,
  //     status: "planing" || "reading"|| "completed"
  // }
],
 extraReducers(builder){
       builder
  },
 
});


export const {changeFilter} = filterBook.actions;
export const bookReducer =  bookSlice.reducer;
export const  changeFilterReducer = filterBook.reducer;