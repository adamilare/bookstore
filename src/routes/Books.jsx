import { useSelector } from 'react-redux';
import AddBook from '../components/books/AddBook';
import Book from '../components/books/Book';

const Books = () => {
  const { books } = useSelector((store) => store.books);

  return (
    <div className="books-container">
      <div className="books">
        {books.map((book) => (
          <Book key={book.id} book={book} percent={57} />
        ))}
      </div>
      <hr />
      <AddBook />
    </div>
  );
};

export default Books;
