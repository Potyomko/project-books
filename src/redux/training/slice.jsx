import { createSlice } from "@reduxjs/toolkit";
import { addNewChekout, updateFinishDate, updateStartDate, addBook, deleteBook, fetchBooksSelected } from "./operation";
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
    isLoading: false,
    trainingBD: []
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
      .addCase(fetchBooks.pending, (state, action) => {
        state.isLoading = true

              
           })
             .addCase(fetchBooks.fulfilled, (state, action) => {

               state.isLoading = false
               state.books = action.payload;
               console.log(state.books);
           })

      .addCase(fetchBooksSelected.fulfilled, (state, action) => {
        // const bookId = action.payload;
        // console.log(bookId);
        // const books = state.books
        // console.log(books);
        // const bookToAdd = books.find((book) => book.id === bookId);
        // const alreadySelected = state.selectedBooks.find((book) => book.id === bookId);
        // console.log(alreadySelected);
        // if (bookToAdd && !alreadySelected) {
        //   state.selectedBooks.push(bookToAdd);


        // }
        console.log(action.payload);

        state.selectedBooks = action.payload
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const bookIdToDelete = action.payload;
        state.selectedBooks = state.selectedBooks.filter(book => book.id !== bookIdToDelete);
      })
      
    }})

// export const { addBook } = trainingSlice.actions;
export const trainingReducer = trainingSlice.reducer;
