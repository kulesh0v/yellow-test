import { memo } from 'react';
import PropTypes from 'prop-types'
import './Jog.css'
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
function Jog({ date, distance, time, id }) {

  let formatedDate = new Date();
  formatedDate.setMilliseconds(date);
  formatedDate = dateFormat(formatedDate, "dd.mm.yyyy");
  return (
    <div className='jog-card'>
      <Link to={`${routes.jogEditor}/${id}`}>
        <img src='/images/jog-icon.svg' alt='jog icon' />
      </Link>
      <div className='jog-data-list'>
        <div className='jog-date jog-data'>
          <span className='jog-data-value'>{formatedDate}</span>
        </div>
        <div className='jog-data'>
          <span className='jog-data-label'>Speed:</span>
          <span className='jog-data-value'>15</span>
        </div>
        <div className='jog-data'>
          <span className='jog-data-label'>Distance:</span>
          <span className='jog-data-value'>{distance} km</span>
        </div>
        <div className='jog-data'>
          <span className='jog-data-label'>Time:</span>
          <span className='jog-data-value'>{time} min</span>
        </div>
      </div>
    </div>
  )
}

Jog.propTypes = {
  date: PropTypes.number.isRequired,
  distance: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
}

export default memo(Jog);
