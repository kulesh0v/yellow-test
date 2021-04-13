import './login.css';
import PropTypes from 'prop-types';

export default function LoginPage({ onLogin }) {
  return (
    <div className='login-modal'>
      <img src='images/bear-face.svg' className='bear-face' alt='logo bear face'></img>
      <button className='login-button' onClick={onLogin}>
        Let me in
      </button>
    </div>
  )
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
} 