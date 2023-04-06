import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook, getBooks } from '../../redux/books/bookThunk';
import Book from '../../models/Book.model';

const selectOption = ['Action', 'Biography', 'History', 'Kids'];

const AddBook = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleNewBook = (e) => {
    e.preventDefault();

    const bookData = Object.fromEntries(new FormData(e.target));

    const { title, author, category } = bookData;
    if (!title || !author || !category) {
      setError('Please fill in all fields.');
      return;
    }

    e.target.reset();
    setError('');

    const newBookData = new Book('', title, author, category);

    dispatch(addBook(newBookData)).then(() => dispatch(getBooks()));
  };

  return (
    <div className="add-book">
      <span className="add-book-title">ADD NEW BOOK</span>
      <form className="add-book-form" onSubmit={handleNewBook}>
        <input name="title" type="text" placeholder="Book title" />
        <input name="author" type="text" placeholder="Book author" />
        <select name="category">
          {selectOption.map((item) => (
            <option key={item} value={item.toLowerCase()}>
              {item}
            </option>
          ))}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default AddBook;
