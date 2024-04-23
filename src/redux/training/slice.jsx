import { createSlice } from "@reduxjs/toolkit";

const trainingSlice = createSlice({
  name: "training",
  initialState: {
    startDate: null,
    finishDate: null,
    books: [
      { id: 1, title: "The Great Gatsby" },
      { id: 2, title: "To Kill a Mockingbird" },
      { id: 3, title: "1984" },
      { id: 4, title: "Pride and Prejudice" },
      { id: 5, title: "The Catcher in the Rye" }
    ],
    selectedBooks: [
      { id: 1, title: "The Great Gatsby" },
      { id: 2, title: "To Kill a Mockingbird" },
      { id: 3, title: "1984" },
      { id: 4, title: "Pride and Prejudice" },
      { id: 5, title: "The Catcher in the Rye" }
    ]
  },
  reducers: {
    addBook(state, action) {
      const bookId = action.payload;
      const bookToAdd = state.books.find((book) => book.id === bookId);
      if (bookToAdd) {
        state.selectedBooks.push(bookToAdd);
      }
    }
  }
});

export const { addBook } = trainingSlice.actions;
export const trainingReducer = trainingSlice.reducer;
