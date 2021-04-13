import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <img src={logo} className="logo" alt="logo" />
    </header>
  );
}
