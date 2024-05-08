import { createSlice } from "@reduxjs/toolkit";
import { addNewChekout, updateFinishDate, updateStartDate, addBook, markAsCompleted, getTreaningData, andOfTraining } from "./operation";

const trainingSlice = createSlice({
  name: "training",
  initialState: {
    id: null,
    startDate:  1714587761, 
    finishDate: 1717093361,
    books: [
      { id: 1, title: "The Great Gatsby", author: "author", year: 2023, pages: 135, status: 'completed' },
      { id: 2, title: "To Kill a Mockingbird", author: "author", year: 2023, pages: 135, status: 'completed' },
      { id: 3, title: "1984", author: "author", year: 2023, pages: 135, status: 'reading'  },
      { id: 4, title: "Pride and Prejudice", author: "author", year: 2023, pages: 135 , status: 'reading'},
      { id: 5, title: "The Catcher in the Rye", author: "author", year: 2023, pages: 135, status: 'reading' }
    ],
    selectedBooks: [
      { id: 1, title: "The Great Gatsby", author: "author", year: 2023, pages: 135, status: 'completed' },
      { id: 2, title: "To Kill a Mockingbird", author: "author", year: 2023, pages: 135, status: 'completed' },
      { id: 3, title: "1984", author: "author", year: 2023, pages: 135, status: 'reading'  },
      { id: 4, title: "Pride and Prejudice", author: "author", year: 2023, pages: 135 , status: 'reading'},
      { id: 5, title: "The Catcher in the Rye", author: "author", year: 2023, pages: 135, status: 'reading' }
    ],
    checkout: [
      // поки не продумала наповнення
    ],
    prevChekout: [],
    isStarted: true,
    isLoading: false,
    userId: null
  }, 
  extraReducers(builder) {
    builder
    .addCase(getTreaningData.pending, (state, action)=> {
      state.isLoading = true
      })
      .addCase(getTreaningData.fulfilled, (state, action)=> {
        console.log(action.payload)
      state.id = action.payload.id;
      state.startDate = action.payload.startDate;
      state.finishDate = action.payload.finishDate;
      state.selectedBooks = action.payload.selectedBooks;
      state.checkout = action.payload.checkout;
      state.prevChekout = action.payload.prevChekout;
      // state.isStarted = action.payload.isStarted;
      state.userId = action.payload.userId;
      state.isLoading = false;
      state.isStarted = true
      // console.log(state)
      // state.isLoading = false
      })
      .addCase(updateStartDate.fulfilled, (state, action) => {
        state.startDate = action.payload;
      })
      .addCase(updateFinishDate.fulfilled, (state, action) => {
        state.finishDate = action.payload;
        console.log(state.isLoading)
      })
      .addCase(addNewChekout.fulfilled, (state, action) => {
        state.checkout.push(action.payload);
      })
      .addCase(addBook.fulfilled, (state, action) => {
        const bookId = action.payload;
      const bookToAdd = state.books.find((book) => book.id === bookId);
      if (bookToAdd) {
        state.selectedBooks.push(bookToAdd);
      }
      })
      .addCase(markAsCompleted.fulfilled, (state, action)=> {
        // const bookId = action.payload;
        state.selectedBooks.forEach(book => {
          if (book.id  === action.payload && book.status === "reading"){
            book.status = "completed"
          } else  if (book.id  === action.payload && book.status === "completed"){
            book.status = "reading"
          }
        });
      })
      .addCase(andOfTraining.fulfilled, (state, action)=> {
        state.prevChekout = action.payload;
        state.checkout = [];
        state.isStarted = false
        // prevChekout: checkout, checkout: [], isStarted: false
      })
    }})

// export const { addBook } = trainingSlice.actions;
export const trainingReducer = trainingSlice.reducer;
