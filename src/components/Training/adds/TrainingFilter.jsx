import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, deleteBook } from "../../../redux/training/operation";
import { selectBooks, selectSelectedBooks } from "../../../redux/training/selectors";
import { updateFinishDate, updateStartDate } from "../../../redux/training/operation";
import { ToastContainer, toast } from "react-toastify";
import logoDelete from '../icons/delete.svg'
export const TrainingFilter = () => {
  const books = useSelector(selectBooks);
  const selectedBooks = useSelector(selectSelectedBooks);
  const dispatch = useDispatch();
  const [selectedBookId, setSelectedBookId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");

  const handleStartDateChange = (e) => {
    const choosenDate = Date.parse(e.target.value) / 1000;
    setStartDate(choosenDate);
    dispatch(updateStartDate(choosenDate));
  };

  const handleFinishDateChange = (e) => {
    const choosenDate = Date.parse(e.target.value) / 1000;
    setFinishDate(choosenDate);
    dispatch(updateFinishDate(choosenDate));
  };

  const handleBookSelect = (e) => {
    setSelectedBookId(e.target.value);
  };

  const handleAddBook = () => {
    if (selectedBookId && startDate && finishDate) {
      dispatch(addBook(selectedBookId));
      setSelectedBookId("");
      setStartDate("");
      setFinishDate("");
    } else {
      toast.error("Будь ласка, заповніть всі поля перед додаванням книги.");
    }
  };

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId));
  }

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
              <th>Автор</th>
              <th>Рік</th>
              <th>Кількість сторінок</th>
              <th>Статус</th>

            </tr>
          </thead>
          <tbody>
            {selectedBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td>{book.pages}</td>
                <td>{book.status}</td>
                <img onClick={() => handleDeleteBook(book.id)} src={logoDelete} alt="" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
    </div>
  );
};