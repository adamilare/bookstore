import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../../redux/books/bookThunk';

const Bookops = ({ bookId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook(bookId)).then(() => dispatch(getBooks()));
  };

  return (
    <div className="book-actions">
      <button type="button" className="btn btn-comment">
        Commnet
      </button>
      <button type="button" onClick={handleDelete} className="btn btn-remove">
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
