import { useState } from 'react';
import { NavLink } from "react-router-dom";
import routes from "../../constants/routes";
import './MobileMenu.css';

export function MobileMenu({ isAuthenticated }) {
  const [isOpened, setIsOpened] = useState(false);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className='mobile-menu'>
      <div className='mobile-menu-modal' style={{ display: isOpened ? 'block' : 'none' }}>
        <img className='mobile-menu-logo' src='/images/logo.png' alt='logo' />
        <button className='mobile-menu-close-button' onClick={() => setIsOpened(false)}>
          <img src='/images/cancel.svg' />
        </button>
        <div className='mobile-menu-bar-items-list'>
          <div className="mobile-menu-bar-item">
            <NavLink to={routes.jogs}
              className='mobile-menu-bar-item-link'
              activeClassName='mobile-menu-bar-item-link-active'
              onClick={() => setIsOpened(false)}>
              JOGS
            </NavLink>
          </div>
          <div className="mobile-menu-bar-item">
            <NavLink to={routes.info} className='mobile-menu-bar-item-link' activeClassName='mobile-menu-bar-item-link-active'
              onClick={() => setIsOpened(false)}>
              INFO
            </NavLink>
          </div>
          <div className="mobile-menu-bar-item">
            <span className="mobile-menu-bar-item-link">
              CONTACT US
          </span>
          </div>
        </div>
      </div>
      <button className='mobile-menu-button' onClick={() => setIsOpened(true)}>
        <img src='/images/menu.png' alt='menu button' />
      </button>
    </div>
  );
}