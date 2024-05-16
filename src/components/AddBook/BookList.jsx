import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logoDelete from '../Training/icons/delete.svg';
import { deleteBook } from '../../redux/library/operation';
import { BookFirst, BookFirst2, ContainerFirst, ContainerH2, ContainerH2Second, ContainerH3, ContainerTextSecond, ContainerTitle, ListText, VectorBook, ContainerMapBook, TDBooksIMG, TDBooksTextYears, H3BooksTextYears, H3BooksTextPages, TDBooksText } from './Styled/StyledList.styled';
import BookListIcon from '../Header/Icon/icon library.svg';
import Vector from './Icons/Vector (4).svg';
import Flag from './Icons/flag.svg';

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

  books.forEach(book => {
    if (book.status === "planning") {
      planningBooks.push(book);
    } else if (book.status === "reading") {
      readingBooks.push(book);
    } else if (book.status === "completed") {
      completedBooks.push(book);
    }
  });

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
          <ListText>Визначте ціль, оберіть період, розпочинайте тренування</ListText>
        </ContainerTextSecond>
      </ContainerFirst>
    );
  }

  return (
    <div>
      <ContainerH3>
       
         <h3>Назва</h3>
       <h3>Автор</h3>
     <H3BooksTextYears>Рік</H3BooksTextYears>
        <H3BooksTextPages>Сторінки</H3BooksTextPages>
        

       
      

      </ContainerH3>
      {planningBooks.map(book => (
        <ContainerMapBook key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <TDBooksTextYears>{book.year}</TDBooksTextYears>
          < TDBooksText>{book.pages}</ TDBooksText>
         <TDBooksIMG onClick={() => handleDeleteBook(book.id)} src={logoDelete} alt="Видалити" />
        </ContainerMapBook>
      ))}
      {readingBooks.map(book => (
        <ContainerMapBook key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.year}</p>
          <p>{book.pages}</p>
          <p><img onClick={() => handleDeleteBook(book.id)} src={logoDelete} alt="Видалити" /></p>
        </ContainerMapBook>
      ))}
      {completedBooks.map(book => (
        <ContainerMapBook key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.year}</p>
          <p>{book.pages}</p>
          <p><img onClick={() => handleDeleteBook(book.id)} src={logoDelete} alt="Видалити" /></p>
        </ContainerMapBook>
      ))}
    </div>
  );
};
