import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg'
import './Header.css'
import Menu from '../menu/Menu';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <header className='header'>
      <img src={logo} className="logo" alt="logo" />
      <Menu isAuthenticated={props.isAuthenticated} />
    </header>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
}
