
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logoDelete from '../Training/icons/delete.svg'
import { deleteBook } from '../../redux/library/operation';

export const BookList = () => {
  const books = useSelector(state => state.books.booksBD);
  const dispatch = useDispatch();

  const handleDeleteBook = bookId => {
    console.log("Deleting book with ID:", bookId);
    dispatch(deleteBook(bookId));
  };

  const planningBooks = [];
  const readingBooks = [];
  const completedBooks = [];

  // Розділіть книги на різні списки залежно від їх статусу
  books.forEach(book => {
    if (book.status === "planning") {
      planningBooks.push(book);
    } else if (book.status === "reading") {
      readingBooks.push(book);
    } else if (book.status === "completed") {
      completedBooks.push(book);
    }
  });

  // Перевірте, чи є книги для відображення
  if (!books || books.length === 0) {
    return (
      <div>
        <ul>
          <li>
            <h1>Крок 1.</h1>
          </li>
          <li>Створіть особисту бібліотеку</li>
          <li>Додайте до неї книжки, які маєте намір прочитати.</li>
        </ul>
        <ul>
          <li>Крок 2.</li>
          <li>Сформуйте своє перше тренування</li>
          <li>Визначте ціль, оберіть період, розпочинайте тренування.</li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Назва</th>
            <th>Автор</th>
            <th>Рік</th>
            <th>Сторінки</th>
          
          </tr>
        </thead>
        <tbody>
          {planningBooks.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>{book.pages}</td>
              <td><img onClick={() => handleDeleteBook(book.id)} src={logoDelete} alt="Видалити" /></td>
            </tr>
          ))}
          {readingBooks.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>{book.pages}</td>
              <td><img onClick={() => handleDeleteBook(book.id)} src={logoDelete} alt="Видалити" /></td>
            </tr>
          ))}
          {completedBooks.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>{book.pages}</td>
              <td><img onClick={() => handleDeleteBook(book.id)} src={logoDelete} alt="Видалити" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};