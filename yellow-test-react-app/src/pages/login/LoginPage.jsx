import { Redirect } from "react-router";
import PropTypes from 'prop-types';
import routes from '../../constants/routes';
import './login.css';

export default function LoginPage({ onLogin }) {
  if (!localStorage.getItem('jog-tracker-token')) {
    return (
      <div className='login-modal'>
        <img src='/images/bear-face.svg' className='bear-face' alt='logo bear face'></img>
        <img src='/images/pink-bear-face.png' className='bear-face-mobile' alt='logo bear face'></img>
        <button className='login-button' onClick={onLogin}>
          Let me in
        </button>
      </div>
    )
  }

  return <Redirect to={routes.jogs} />
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
}