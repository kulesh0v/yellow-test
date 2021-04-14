import { useState } from 'react';
import Header from './components/header/Header';
import LoginPage from './pages/login/LoginPage';
import JogsPage from './pages/jogsPage/JogsPage';
import InfoPage from './pages/info/InfoPage';
import routes from "./routes";
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import { auth } from './api';
import JogEditor from './pages/jogEditor/JogEditor';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('jog-tracker-token'));
  let history = useHistory();
  const [jogs, setJogs] = useState([]);

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
      <div className='container'>
        <Switch>
          <Route path={routes.login}>
            <LoginPage onLogin={onLogin} />
          </Route>
          <Route path={routes.jogs}>
            <JogsPage jogs={jogs} setJogs={setJogs} />
          </Route>
          <Route path={routes.info}>
            <InfoPage />
          </Route>
          <Route path={routes.jogEditor} exact>
            <JogEditor />
          </Route>
          <Route path={`${routes.jogEditor}/:id`}
            component={(routeProps) => {
              const jog = jogs.find(jog => jog.id === +routeProps.match.params.id);
              console.log(routeProps, jog);
              return <JogEditor {...jog} />
            }}
          />
        </Switch>
      </div>
    </>
  );
};


