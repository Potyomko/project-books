import { selectSelectedBooks} from "../../../redux/training/selectors";
import {useSelector } from "react-redux";

export const BooksList = () => {
    const selectedBooks = useSelector(selectSelectedBooks);
    



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
            <td><input type="checkbox" name={book.title} id={book.id} checked={book.status === 'completed'} /> {book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>{book.pages}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
}