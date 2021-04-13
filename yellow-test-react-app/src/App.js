import { useState } from 'react';
import Header from './components/header/Header';
import LoginPage from './pages/login/LoginPage';
import JogsPage from './pages/jogs/JogsPage';
import InfoPage from './pages/info/InfoPage';
import routes from "./routes";
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import { auth } from './api';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('jog-tracker-token'));
  let history = useHistory();

  const onLogin = async () => {
    const res = await auth();
    localStorage.setItem('jog-tracker-token', res.data.response.access_token);
    setIsAuthenticated(true);
    history.push(routes.jogs);
  }

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      {
        !isAuthenticated && < Redirect to={{ pathname: routes.login }} />
      }
      <Switch>
        <Route path={routes.login}>
          <LoginPage onLogin={onLogin} />
        </Route>
      </Switch>
      <Switch>
        <Route path={routes.jogs}>
          <JogsPage />
        </Route>
      </Switch>
      <Switch>
        <Route path={routes.info}>
          <InfoPage />
        </Route>
      </Switch>
    </>
  );
};


