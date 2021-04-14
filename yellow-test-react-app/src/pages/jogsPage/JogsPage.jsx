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
    const res = await getJogs();
    setJogs(res.data.response.jogs)
    setIsLoaded(false);
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

  if (isLoaded) {
    return 'Loading...';
  }

  if (!jogs && !jogs.length) {
    return (
      <div>
        <img src='/iamges/sad-rounded-square-emoticon.svg' alt='sad emoticon'></img>
        <span>Nothing is there</span>
        <button>Create your jog first</button>
      </div>
    );
  }

  return (
    <>
      <ul className='jogs-list'>
        {
          jogs.filter(jogsDateCompare).map(jog =>
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