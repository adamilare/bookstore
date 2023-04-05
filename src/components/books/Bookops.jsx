/* eslint-disable */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

const Bookops = ({ bookId }) => {
  const dispatch = useDispatch();
  console.log('bookId', bookId);

  return (
    <div className="book-actions">
      <button type="button" className="btn btn-comment">
        Commnet
      </button>
      <button
        type="button"
        onClick={() => dispatch(removeBook(bookId))}
        className="btn btn-remove"
      >
        Remove
      </button>
      <button type="button" className="btn btn-edit">
        Edit
      </button>
    </div>
  );
};

Bookops.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default Bookops;
