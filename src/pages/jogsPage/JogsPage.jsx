import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getJogs } from '../../api';
import Jog from '../../components/jog/Jog';
import routes from '../../constants/routes';
import './JogsPage.css';

export default function JogsPage({ jogs, setJogs, dateTo, dateFrom }) {
  const [isLoaded, setIsLoaded] = useState(true);

  const loadJogs = async () => {
    try {
      const res = await getJogs();
      setJogs(res.data.response.jogs)
      setIsLoaded(false);
    } catch (e) {
      alert(e.response.data.error_message);
    }
  }

  const jogsDateCompare = (jog) => {
    let result = true;
    const jogDate = new Date();
    jogDate.setMilliseconds(jog.date);

    if (dateFrom) {
      let dateFromWithTime = new Date(dateFrom);
      dateFromWithTime.setHours(0, 0, 0, 0);
      if (jogDate < dateFromWithTime) {
        result = false;
      }
    }

    if (result && dateTo) {
      let dateToWithTime = new Date(dateTo);
      dateToWithTime.setHours(23, 59, 59, 999);
      if (jogDate > dateToWithTime) {
        result = false;
      }
    }

    return result;
  }

  useEffect(() => {
    loadJogs()
  }, []);

  const filtredJogs = jogs.filter(jogsDateCompare);

  if (isLoaded) {
    return (<div className='loading'>Loading...</div>);
  }

  if (!filtredJogs?.length) {
    return (
      <div className='message-block'>
        <img src='images/sad-rounded-square-emoticon.svg' alt='sad emoticon' className='sad-emoticon-icon'></img>
        <div className='message-text'>Nothing is there</div>
        <button className='create-first-jog-button'>
          <Link to={routes.jogEditor} className='create-first-jog-button-link'>
            Create your jog first
          </Link>
        </button>
      </div >
    );
  }

  return (
    <>
      <ul className='jogs-list'>
        {
          filtredJogs.map(jog =>
            <li key={jog.id}>
              <Jog date={jog.date} distance={jog.distance} time={jog.time} id={jog.id} />
            </li>
          )
        }
      </ul>
      <button className='add-jog-button'>
        <Link to={routes.jogEditor}>
          <img src='/images/add.svg' alt='add jog' />
        </Link>
      </button>
    </>
  )
}

JogsPage.propTypes = {
  jogs: PropTypes.arrayOf(PropTypes.object),
  setJogs: PropTypes.func.isRequired,
  dateFrom: PropTypes.string,
  dateTo: PropTypes.string,
}