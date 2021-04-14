import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getJogs } from '../../api';
import Jog from '../../components/jog/Jog';
import routes from '../../routes';
import './JogsPage.css';

export default function JogsPage({ jogs, setJogs }) {
  const [isLoaded, setIsLoaded] = useState(true);

  const loadJogs = async () => {
    const res = await getJogs();
    setJogs(res.data.response.jogs)
    setIsLoaded(false);
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
      <ul style={{ listStyleType: 'none' }}>
        {
          jogs.map(jog =>
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
}