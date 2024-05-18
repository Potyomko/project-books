import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logoDelete from '../Training/icons/delete.svg';
import { deleteBook } from '../../redux/library/operation';
import { BookFirst, BookFirst2, ContainerFirst, ContainerH2, ContainerH2Second, ContainerH3, ContainerTextSecond, ContainerTitle, ListText, VectorBook, ContainerMapBook,  Tr, Img, Th, Thead, TableBook, PlaningReadingItem } from './Styled/StyledList.styled';
import BookListIcon from '../Header/Icon/icon library.svg';
import Vector from './Icons/Vector (4).svg';
import Flag from './Icons/flag.svg';

import Flat from './Icons/Flat.svg'
import bookTraining from '../Training/icons/openBook.svg';
import { Table } from 'components/Statistics/style/booksList.styled';
import { Modal } from './modalbooks';
export const BookList = () => {
  const books = useSelector(state => state.books.booksBD);
  const dispatch = useDispatch();
  const[ modalTreaker, setModalTreaker] = useState(false)
  const handleDeleteBook = bookId => {
    console.log("Deleting book with ID:", bookId);
    dispatch(deleteBook(bookId));
  };
const HandleOnOpenResume = ()=>{
setModalTreaker(true)

}

const HandleCloseESCResume = ()=>{
  setModalTreaker(false)
  
  }
  const HandleCloseSaveResume = ()=>{
    setModalTreaker(false)
    
    }

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
           {modalTreaker && <Modal/>}
     <TableBook>
      
          <Thead>
          <PlaningReadingItem>Маю намір прочитати</PlaningReadingItem>
            <tr>
              <Th>Назва книги</Th>
              <Th>Автор</Th>
              <Th>Рік</Th>
              <Th>Стор.</Th>
              <Th></Th>
            </tr>
          </Thead>
          <tbody>

            {planningBooks.map((book) => (

              <Tr key={book.id}> 
                <td><Img src={bookTraining} alt=""/> {book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td>{book.pages}</td>
                <td> 
                  <img onClick={() => handleDeleteBook(book.id)} src={logoDelete} alt="" />
                </td>
              </Tr>
              
            ))}
          <div></div>
          </tbody>
        </TableBook>
      {readingBooks.map(book => (
      <div> 
        <TableBook>
        <Thead>
      <PlaningReadingItem>Читаю</PlaningReadingItem>
        <tr>
          <Th>Назва книги</Th>
          <Th>Автор</Th>
          <Th>Рік</Th>
          <Th>Стор.</Th>
          <Th></Th>
        </tr>
      </Thead>
    <Tr key={book.id}> 
    <td><Img src={Flat} alt=""/> {book.title}</td>
    <td>{book.author}</td>
    <td>{book.year}</td>
    <td>{book.pages}</td>
    <td> 
      <img onClick={() => handleDeleteBook(book.id)} src={logoDelete} alt="" />
    </td>
  </Tr>   <div></div>
        </TableBook>
      </div>
         
      ))}
      {completedBooks.map(book => (
           <div> 
           <TableBook>
           <Thead>
         <PlaningReadingItem>Прочитано</PlaningReadingItem>
           <tr>
             <Th>Назва книги</Th>
             <Th>Автор</Th>
             <Th>Рік</Th>
             <Th>Стор.</Th>
             <Th></Th>
           </tr>
         </Thead>
       <Tr key={book.id}> 
       <td><Img src={bookTraining} alt=""/> {book.title}</td>
       <td>{book.author}</td>
       <td>{book.year}</td>
       <td>{book.pages}</td>

       <button onClick={HandleOnOpenResume}>Резюме</button>
       <td> 
         <img onClick={() => handleDeleteBook(book.id)} src={logoDelete} alt="" />

       </td>
     </Tr>   <div></div>
           </TableBook>
         </div>
      ))}
    </div>
  );
};
