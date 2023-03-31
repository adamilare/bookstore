import PropTypes from 'prop-types';
import BookInfo from './BookInfo';
import Progress from './Progress';
import ProgressCurrent from './ProgressCurrent';

const Book = ({ book, percent, handleOperations }) => {
  console.log(book);
  return (
    <div className="book-row">
      <BookInfo book={book} handleOperations={handleOperations} />
      <Progress percent={percent} />
      <ProgressCurrent />
    </div>
  );
};

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
