import { React, useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import sadEmoticon from './sad-rounded-square-emoticon.svg';
import { getJogs } from '../../api';
import Jog from '../../components/jog/Jog';

export default function JogsPage() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [jogs, setJogs] = useState();

  useEffect(() => {
    getJogs().then((res) => {
      console.log(res.data.response.jogs);
      setJogs(res.data.response.jogs)
      setIsLoaded(false);
    })
  }, []);

  if (isLoaded) {
    return 'Loading...';
  }

  if (!jogs && !jogs.length) {
    return (
      <div>
        <img src={sadEmoticon}></img>
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