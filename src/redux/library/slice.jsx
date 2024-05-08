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


import { createSlice} from "@reduxjs/toolkit";
import { addBook, markAsRead } from "./operation";

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
    { id: 1, title: "The Great Gatsby", author: "author", year: 2023, pages: 135, status: 'completed' },
    { id: 2, title: "To Kill a Mockingbird", author: "author", year: 2023, pages: 135, status: 'completed' },
    { id: 3, title: "1984", author: "author", year: 2023, pages: 135, status: 'reading'  },
    { id: 4, title: "Pride and Prejudice", author: "author", year: 2023, pages: 135 , status: 'reading'},
    { id: 5, title: "The Catcher in the Rye", author: "author", year: 2023, pages: 135, status: 'reading' }
  ],
  extraReducers(builder) {
    builder
    .addCase(addBook.fulfilled, (state, action) =>{
      state.push(action.payload)
    })
    .addCase( markAsRead.fulfilled, (state, action) => {
      const bookId = action.payload;
      const book = state.find(book => book.id === bookId);
      if (book) {
        book.status = "completed";
      }
    })
   
  }
});

export const { changeFilter } = filterBook.actions;

export const bookReducer = bookSlice.reducer;
export const changeFilterReducer = filterBook.reducer;

// export default configureStore({
//   reducer: {
//     book: bookReducer,
//     filter: changeFilterReducer
//   }
// });