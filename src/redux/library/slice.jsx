// import { createSlice, } from "@reduxjs/toolkit";

// const filterBook = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     changeFilter(state, action) {
//       return state = action.payload.trim();
//     }
//   }
// });

// const bookSlice = createSlice({
//   name: "book", 
//   initialState:[ 
//     // приклад об'єкту однієї книги

//   //   {
//   //   id:null,
//   //   name: null,
//   //   author: null,
//   //   year:null,
//   //   pages: null,
//   //     status: "planing" || "reading"|| "completed"
//   // }
// ],
// //  extraReducers(builder){
// //        builder
// //   },
 
// });


// export const {changeFilter} = filterBook.actions;
// export const bookReducer =  bookSlice.reducer;
// export const changeFilterReducer = filterBook.reducer;


import { createSlice, configureStore } from "@reduxjs/toolkit";

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
   
    {
      id:null,
      name: null,
      author: null,
      year:null,
      pages: null,
      status: "planning" || "reading"|| "completed"
    }
  ],
  reducers: {
    addBook(state, action) {
      state.push(action.payload);
    },
    markAsRead(state, action) {
      const bookId = action.payload;
      const book = state.find(book => book.id === bookId);
      if (book) {
        book.status = "completed";
      }
    }
  }
});

export const { changeFilter } = filterBook.actions;
export const { addBook, markAsRead } = bookSlice.actions;

export const bookReducer = bookSlice.reducer;
export const changeFilterReducer = filterBook.reducer;

// export default configureStore({
//   reducer: {
//     book: bookReducer,
//     filter: changeFilterReducer
//   }
// });