import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categoriesSlice';

const CheckStatus = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        className="check-status"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
    </div>
  );
};

export default CheckStatus;
