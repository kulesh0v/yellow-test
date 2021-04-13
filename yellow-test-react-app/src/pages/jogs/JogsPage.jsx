import { useEffect, useState } from 'react';
import { getJogs } from '../../api';
import Jog from '../../components/jog/Jog';

export default function JogsPage() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [jogs, setJogs] = useState();

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
        <img src='iamges/sad-rounded-square-emoticon.svg' alt='sad emoticon'></img>
        <span>Nothing is there</span>
        <button>Create your jog first</button>
      </div>
    );
  }

  return (
    <ul style={{ listStyleType: 'none' }}>
      {
        jogs.map(jog =>
          <li key={jog.id}>
            <Jog date={jog.date} distance={jog.distance} time={jog.time} />
          </li>
        )
      }
    </ul>
  )
}