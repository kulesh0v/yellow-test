import { NavLink, useLocation } from "react-router-dom";
import routes from "../../constants/routes";
import './Menu.css';
import PropTypes from 'prop-types';

export default function Menu({ isAuthenticated, filterIsActive, setFilterIsActive }) {
  const location = useLocation();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className='menu-bar'>
      <div className='menu-bar-items-list'>
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
      {location.pathname !== routes.info &&
        <button className='filter-button' onClick={() => setFilterIsActive(!filterIsActive)}>
          <img
            src={filterIsActive ? '/images/filter-active.svg' : '/images/filter.svg'}
            alt={filterIsActive ? 'active filter button' : 'filter button'}
          />
        </button>
      }

    </div>
  )
}

Menu.propTypes = {
  isAuthenticated: PropTypes.bool,
}

