import { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import AddBook from '../components/books/AddBook';
import Book from '../components/books/Book';
import { getBooks } from '../redux/books/bookThunk';

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);
  const { books } = useSelector((store) => store.books, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    setAllBooks(books);
  }, [books]);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="books-container">
      <div className="books">
        {allBooks.map((book) => (
          <Book key={book.id} book={book} percent={57} />
        ))}
      </div>
      <hr />
      <AddBook />
    </div>
  );
};

export default Books;
