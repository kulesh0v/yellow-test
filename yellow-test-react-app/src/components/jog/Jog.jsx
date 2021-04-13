import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'
import jogIcon from './jog-icon.svg'
import './Jog.css'
import dateFormat from 'dateformat';


export default function Jog({ date, distance, time }) {

  let formatedDate = new Date();
  formatedDate.setMilliseconds(date);
  formatedDate = dateFormat(formatedDate, "dd.mm.yyyy");

  return (
    <div className='jog-card'>
      <img src={jogIcon} alt='jog icon' />
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
  time: PropTypes.number.isRequired
}
