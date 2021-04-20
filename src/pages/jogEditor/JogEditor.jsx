import PropTypes from 'prop-types';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { createJog, updateJog } from '../../api';
import dateFormat from 'dateformat';
import { isoDateTimeFormat, dateServerFormat } from '../../constants/dateformats';
import './JogEditor.css'
export default function JogEditor(props) {
  const [date, setDate] = useState(dateFormat(props.date || Date.now(), isoDateTimeFormat));
  const [distance, setDistance] = useState(props.distance || 0);
  const [time, setTime] = useState(props.time || 0);
  const history = useHistory();

  const onSave = async () => {
    const formatedDate = dateFormat(date, dateServerFormat);
    try {
      if (props.id) {
        const { id, user_id } = props;
        await updateJog({ date: formatedDate, distance, time, id, user_id });
        alert('Success!');
      } else {
        await createJog({ date: formatedDate, distance, time });
        alert('Success!');
      }
      goBack();
    } catch (e) {
      alert(e.response.data.error_message);
    }
  }

  const onChangeDate = (e) => {
    setDate(dateFormat(e.target.value, isoDateTimeFormat));
  }

  const goBack = () => history.goBack();

  return (
    <div className='jog-editor'>
      <button className='jog-editor-cancel-button' type='button' onClick={goBack}>
        <img src='/images/cancel.png' alt='cancel button' />
      </button>
      <div className='jog-editor-row'>
        <label htmlFor='distance' className='jog-editor-label'>Distance</label>
        <input id='distance' className='jog-editor-input' type='number' value={distance} onChange={(e) => setDistance(e.target.value)} />
      </div>
      <div className='jog-editor-row'>
        <label htmlFor='time' className='jog-editor-label'>Time</label>
        <input id='time' className='jog-editor-input' type='number' value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div className='jog-editor-row'>
        <label htmlFor='date' className='jog-editor-label'>Date</label>
        <input id='date' className='jog-editor-input' type='datetime-local' value={date} onChange={onChangeDate} />
      </div>
      <button className='jog-editor-save-button' alt='save button' onClick={onSave}>
        Save
      </button>
    </div>
  )
}

JogEditor.propTypes = {
  id: PropTypes.number,
  date: PropTypes.number,
  distance: PropTypes.number,
  time: PropTypes.number,
  user_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}
