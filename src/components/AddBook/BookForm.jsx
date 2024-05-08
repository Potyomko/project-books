import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/library/operation';

 export const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [pages, setPages] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Math.random().toString(36).substr(2, 9), // Генеруємо випадковий id
      title,
      author,
      year,
      pages,
      status: "planning" // За замовчуванням встановлюємо статус планування
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setYear('');
    setPages('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Назва книги" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Автор книги" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input type="text" placeholder="Рік випуску" value={year} onChange={(e) => setYear(e.target.value)} />
      <input type="text" placeholder="Кількість сторінок" value={pages} onChange={(e) => setPages(e.target.value)} />
      <button type="submit">Додати книгу</button>
    </form>
  );
};
 