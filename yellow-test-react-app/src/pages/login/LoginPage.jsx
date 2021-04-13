import React from 'react';
import ReactDom from 'react-dom';
import bearFace from './bear-face.svg'
import './login.css'

export default function LoginPage() {
  return (
    <div className='login-modal'>
      <img src={bearFace} className='bear-face'></img>
      <button className='login-button'>
        Let me in
      </button>
    </div>
  )
}