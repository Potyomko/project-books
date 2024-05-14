
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logoDelete from '../Training/icons/delete.svg'
import { deleteBook } from '../../redux/library/operation';
import {BookFirst,  BookFirst2,  ContainerFirs, ContainerFirst, ContainerH2, ContainerH2Second, ContainerTextSecond, ContainerTitle, ItemH2, ItemTextLi, ListText, VectorBook,} from './Styled/StyledList.styled';
import BookListIcon from '../Header/Icon/icon library.svg'

import Vector from './Icons/Vector (4).svg'

import Flag from './Icons/flag.svg'
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
      <ContainerFirst>
     
            <ContainerTitle>Крок 1.</ContainerTitle>
        
          
         <BookFirst src={BookListIcon} alt="" />
          <ContainerH2>Створіть особисту бібліотеку</ContainerH2>
         
      
      <VectorBook src={Vector} alt="" />
         <ListText>Додайте до неї книжки, які маєте намір прочитати.</ListText>

         
      <ContainerTextSecond>
      <ContainerTitle> Крок 2.</ContainerTitle>
        
          
        <BookFirst2 src={Flag} alt="" />
         <ContainerH2Second> Сформуйте своє перше тренування</ContainerH2Second>
        
     
     <VectorBook src={Vector} alt="" />
        <ListText>
        Визначте ціль, оберіть період, розпочинайте тренування
        </ListText>
      </ContainerTextSecond>
        
         {/* Крок 2.
         Сформуйте своє перше тренування
          Визначте ціль, оберіть період, розпочинайте тренування. */}
    
      </ContainerFirst>
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