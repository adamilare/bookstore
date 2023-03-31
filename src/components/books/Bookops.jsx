/* eslint-disable */
import PropTypes from 'prop-types';

const Bookops = ({ handleOperations }) => (
  <div className="book-actions">
    <button
      type="button"
      onClick={() => handleOperations(0)}
      className="btn btn-comment"
    >
      Commnet
    </button>
    <button
      type="button"
      onClick={() => handleOperations(0)}
      className="btn btn-remove"
    >
      Remove
    </button>
    <button
      type="button"
      onClick={() => handleOperations(0)}
      className="btn btn-edit"
    >
      Edit
    </button>
  </div>
);

Bookops.propTypes = {
  handleOperations: PropTypes.func.isRequired,
};

export default Bookops;
