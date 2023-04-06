import PropTypes from 'prop-types';
import Bookops from './Bookops';

const BookInfo = ({ book }) => (
  <div className="book-left">
    <div className="book-info">
      <div className="book-genre">{book.genre}</div>
      <div className="book-title">{book.title}</div>
      <div className="book-author">{book.author}</div>
    </div>
    <Bookops bookId={book.id} />
  </div>
);

BookInfo.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    chapters: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookInfo;
