import PropTypes from 'prop-types';
import './Header.css'
import Menu from '../menu/Menu';
import { MobileMenu } from '../mobile-menu/MobileMenu';

export default function Header({ isAuthenticated, filterIsActive, setFilterIsActive }) {
  return (
    <header className='header'>
      <img src='/images/logo.svg' className="logo" alt="logo" />
      <Menu
        isAuthenticated={isAuthenticated}
        filterIsActive={filterIsActive}
        setFilterIsActive={setFilterIsActive}
      />
      <MobileMenu isAuthenticated={isAuthenticated} />
    </header>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  filterIsActive: PropTypes.bool.isRequired,
  setFilterIsActive: PropTypes.func.isRequired,
}
