import React from 'react';
import ReactDom from 'react-dom';
import sadEmoticon from './sad-rounded-square-emoticon.svg';

export default function JogsPage() {
  return (
    <div>
      <img src={sadEmoticon}></img>
      <span>Nothing is there</span>
      <button>Create your jog first</button>
    </div>
  );
}