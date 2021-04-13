import React from 'react';
import ReactDom from 'react-dom';
import { Link, NavLink } from "react-router-dom";
import routes from "../../routes";
import './Menu.css';
import PropTypes from 'prop-types';

export default function Menu({ isAuthenticated }) {
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className='menu-bar'>
      <div className="menu-bar-item">
        <NavLink to={routes.jogs} className='menu-bar-item-link' activeClassName='menu-bar-item-link-active'>
          JOGS
      </NavLink>
      </div>
      <div className="menu-bar-item">
        <NavLink to={routes.info} className='menu-bar-item-link' activeClassName='menu-bar-item-link-active'>
          INFO
      </NavLink>
      </div>
      <div className="menu-bar-item">
        <span className="menu-bar-item-link">
          CONTACT US
      </span>
      </div>
    </div>
  )
}

Menu.propTypes = {
  isAuthenticated: PropTypes.bool,
}

