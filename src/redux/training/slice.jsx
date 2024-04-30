import { createSlice } from "@reduxjs/toolkit";
import { addNewChekout, updateFinishDate, updateStartDate, addBook } from "./operation";

const trainingSlice = createSlice({
  name: "training",
  initialState: {
    startDate: 1713890684, 
    finishDate: 1714495484,
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
        const bookId = action.payload;
      const bookToAdd = state.books.find((book) => book.id === bookId);
      if (bookToAdd) {
        state.selectedBooks.push(bookToAdd);
      }
      })
    }})

// export const { addBook } = trainingSlice.actions;
export const trainingReducer = trainingSlice.reducer;
