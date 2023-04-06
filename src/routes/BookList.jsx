import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import AddBook from '../components/books/AddBook';
import Book from '../components/books/Book';
import { getBooks } from '../redux/books/bookThunk';

const Books = () => {
  const { books } = useSelector((store) => store.books, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

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
