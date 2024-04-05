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
  initialState: {

    id:null,
    name: null,
    author: null,
    year:null,
    pages: null,
      status: "planing" || "reading"|| "completed"
      
  },
  reducers: {

  },
 
});


export const {changeFilter} = filterBook.actions;
export const bookReducer =  bookSlice.reducer;
export const  changeFilterReducer = filterBook.reducer;