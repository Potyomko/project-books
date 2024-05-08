import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markAsRead } from '../../redux/library/operation';

export const BookList = () => {
  const books = useSelector(state => state.library);
  const dispatch = useDispatch();

  const handleMarkAsRead = (bookId) => {
    dispatch(markAsRead(bookId));
  };

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <span>{book.title} by {book.author}</span>
          {book.status !== "completed" && <button onClick={() => handleMarkAsRead(book.id)}>Прочитано</button>}
          {book.status === "completed" && <span>Прочитано</span>}
        </li>
      ))}
    </ul>
  );
};
