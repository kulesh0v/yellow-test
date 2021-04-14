import './Header.css'
import Menu from '../menu/Menu';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <header className='header'>
      <img src='/images/logo.svg' className="logo" alt="logo" />
      <Menu isAuthenticated={props.isAuthenticated} />
    </header>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
}
