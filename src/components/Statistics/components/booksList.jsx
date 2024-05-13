import { selectSelectedBooks, selectTrainingId} from "../../../redux/training/selectors";
import {useDispatch, useSelector } from "react-redux";
import { markAsCompleted } from "../../../redux/training/operation";
import {Thead, Tbody, Td, Th, Tr, Table} from '../style/booksList.styled'

export const BooksList = () => {
    const selectedBooks = useSelector(selectSelectedBooks);
    const trId = useSelector(selectTrainingId);
    const dispatch = useDispatch()
    
    const handleChekboxChange = (bookId) => {
      dispatch(markAsCompleted({bookId, trId}))
    }


    return  <div>
      <Thead>
        <Tr>
          <Th>Назва книги</Th>
          <Th>Автор</Th>
          <Th>Рік</Th>
          <Th>Стор.</Th>
        </Tr>
      </Thead>
      <Tbody>
        {selectedBooks.map((book) => (
          <Tr key={book.id}>
            <Td><input type="checkbox" name={book.title} id={book.id} checked={book.status === 'completed'} onChange={()=>handleChekboxChange(book.id)}/> {book.title}</Td>
            <Td>{book.author}</Td>
            <Td>{book.year}</Td>
            <Td>{book.pages}</Td>
          </Tr>
        ))}
      </Tbody>
    </div>
}