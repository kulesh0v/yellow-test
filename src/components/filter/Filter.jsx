import PropTypes from 'prop-types';
import { isoDateFormat } from '../../constants/dateformats';
import dateFormat from 'dateformat';
import './Filter.css';

export default function Filter({ dateFrom, setDateFrom, dateTo, setDateTo }) {
  return (
    <div className='filter'>
      <div className='filter-item'>
        <label htmlFor='date-from' className='filter-label'>Date from</label>
        <input
          type='date'
          id='date-from'
          className='filter-input'
          value={dateFrom && dateFormat(dateFrom, isoDateFormat)}
          onChange={e => setDateFrom(e.target.value)}
        />
      </div>
      <div className='filter-item'>
        <label htmlFor='date-to' className='filter-label'>Date to</label>
        <input
          id='date-to'
          type='date'
          className='filter-input'
          value={dateTo && dateFormat(dateTo, isoDateFormat)}
          onChange={e => setDateTo(e.target.value)}
        />
      </div>
    </div>
  )
}

Filter.propTypes = {
  dateFrom: PropTypes.string,
  dateTo: PropTypes.string,
  setDateFrom: PropTypes.func.isRequired,
  setDateTo: PropTypes.func.isRequired,
}