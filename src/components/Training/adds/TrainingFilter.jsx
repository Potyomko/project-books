import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../../redux/training/slice";
import { selectBooks, selectSelectedBooks } from "../../../redux/training/selectors";
import { updateFinishDate, updateStartDate } from "../../../redux/training/operation";

export const TrainingFilter = () => {
  const books = useSelector(selectBooks);
  const selectedBooks = useSelector(selectSelectedBooks);
  const dispatch = useDispatch();
  const [selectedBookId, setSelectedBookId] = useState("");

  const handleStartDateChange = (e) => {
    dispatch(updateStartDate(e.target.value));
  };

  const handleFinishDateChange = (e) => {
    dispatch(updateFinishDate(e.target.value));
  };

  const handleBookSelect = (e) => {
    setSelectedBookId(e.target.value);
  };

  const handleAddBook = () => {
    if (selectedBookId) {
      dispatch(addBook(selectedBookId));
      setSelectedBookId("");
    }
  };

  return (
    <div>
      <div>
        <input
          type="date"
          placeholder="Початок"
          onChange={handleStartDateChange}
        />
        <input
          type="date"
          placeholder="Закінчення"
          onChange={handleFinishDateChange}
        />
      </div>
      <div>
        <select onChange={handleBookSelect} value={selectedBookId}>
          <option value="">Виберіть книгу</option>
          {books.map((book) => (
            <option key={book.id} value={book.id}>
              {book.title}
            </option>
          ))}
        </select>
        <button onClick={handleAddBook}>Додати</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Назва книги</th>
            </tr>
          </thead>
          <tbody>
            {selectedBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
