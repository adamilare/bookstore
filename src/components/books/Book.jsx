import PropTypes from 'prop-types';
import BookInfo from './BookInfo';
import Progress from './Progress';
import ProgressCurrent from './ProgressCurrent';

const Book = ({ book, percent, handleOperations }) => (
  <div className="book-row">
    <BookInfo book={book} handleOperations={handleOperations} />
    <div className="book-right">
      <Progress percent={percent} />
      <hr />
      <ProgressCurrent />
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    chapters: PropTypes.number.isRequired,
  }).isRequired,
  percent: PropTypes.number.isRequired,
  handleOperations: PropTypes.func.isRequired,
};

export default Book;
