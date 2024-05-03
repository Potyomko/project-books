import { createSlice } from "@reduxjs/toolkit";
import { addNewChekout, updateFinishDate, updateStartDate, addBook, deleteBook } from "./operation";
import { fetchBooks } from "./operation";
import { useSelector } from "react-redux";

const trainingSlice = createSlice({
  name: "training",
  initialState: {
    startDate: 1713890684, 
    finishDate: 1714495484,
    books: [
     
    ],
    selectedBooks: [

    ],
    checkout: [
      // поки не продумала наповнення
    ],
    prevChekout: [],
    isStarted: true,
    isLoading: false
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
      })
      .addCase(addBook.fulfilled, (state, action) => {
        const bookId = parseInt(action.payload);
        const books = useSelector(state => state.books.booksBD);
        const bookToAdd = books.find((book) => book.id === bookId);
        const alreadySelected = state.selectedBooks.find((book) => book.id === bookId);
        if (bookToAdd && !alreadySelected) {
          state.selectedBooks.push(bookToAdd);
        }
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const bookIdToDelete = parseInt(action.payload);
        state.selectedBooks = state.selectedBooks.filter(book => book.id !== bookIdToDelete);
      })
      .addCase(fetchBooks.pending, (state, action) => {
        state.isLoading = true
        console.log(state.isLoading);
              
           })
             .addCase(fetchBooks.fulfilled, (state, action) => {
                 console.log(state.isLoading);
               state.isLoading = false
               state.books = action.payload;
           })

    }})

// export const { addBook } = trainingSlice.actions;
export const trainingReducer = trainingSlice.reducer;
