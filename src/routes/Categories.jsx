import { useSelector } from 'react-redux';
import CheckStatus from '../components/categories/CheckStatus';

const Categories = () => {
  const { status } = useSelector((store) => store.categories);

  return (
    <>
      {status && <h1>Under construction</h1>}
      <CheckStatus />
    </>
  );
};
export default Categories;
