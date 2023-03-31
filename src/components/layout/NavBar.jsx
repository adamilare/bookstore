import { NavLink } from 'react-router-dom';
import styles from '../../css/NavBar.module.css';

const NavBar = () => (
  <div className={`clas ${styles.navbar}`}>
    <span className={styles['nav-left']}>Bookstore CMS</span>
    <div className={styles['nav-right']}>
      <NavLink to="/">BOOKS</NavLink>
      <NavLink to="/categories">CATEGORIES</NavLink>
    </div>
    <button type="button">
      <span>O</span>
    </button>
  </div>
);

export default NavBar;
