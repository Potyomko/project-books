import { selectSelectedBooks, selectTrainingId} from "../../../redux/training/selectors";
import {useDispatch, useSelector } from "react-redux";
import { markAsCompleted } from "../../../redux/training/operation";

export const BooksList = () => {
    const selectedBooks = useSelector(selectSelectedBooks);
    const trId = useSelector(selectTrainingId);
    const dispatch = useDispatch()
    
    const handleChekboxChange = (bookId) => {
      dispatch(markAsCompleted({bookId, trId}))
    }


    return  <div>
    <table>
      <thead>
        <tr>
          <th>Назва книги</th>
          <th>Автор</th>
          <th>Рік</th>
          <th>Стор.</th>
        </tr>
      </thead>
      <tbody>
        {selectedBooks.map((book) => (
          <tr key={book.id}>
            <td><input type="checkbox" name={book.title} id={book.id} checked={book.status === 'completed'} onChange={()=>handleChekboxChange(book.id)}/> {book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>{book.pages}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
}