import { useState } from 'react';
import Header from './components/header/Header';
import LoginPage from './pages/login/LoginPage';
import JogsPage from './pages/jogsPage/JogsPage';
import InfoPage from './pages/info/InfoPage';
import routes from "./constants/routes";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { auth } from './api';
import JogEditor from './pages/jogEditor/JogEditor';
import Filter from './components/filter/Filter';
import PrivateRoute from './components/private-route/PrivateRoute';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('jog-tracker-token'));
  const [filterIsActive, setFilterIsActive] = useState(false);
  const [jogs, setJogs] = useState([]);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  let history = useHistory();
  const location = useLocation();

  const onLogin = async () => {
    try {
      const res = await auth();
      localStorage.setItem('jog-tracker-token', res.data.response.access_token);
      setIsAuthenticated(true);
      history.push(routes.jogs);
    } catch (e) {
      alert(e.response.data.error_message);
    }
  }

  return (
    <>
      <Header
        isAuthenticated={isAuthenticated}
        setFilterIsActive={setFilterIsActive}
        filterIsActive={filterIsActive}
      />
      {
        filterIsActive && location.pathname !== routes.info &&
        <Filter
          dateFrom={dateFrom}
          setDateFrom={setDateFrom}
          dateTo={dateTo}
          setDateTo={setDateTo}
        />
      }
      <div className='container'>
        <Switch>
          <Route path={routes.login}>
            <LoginPage onLogin={onLogin} exact={true} />
          </Route>
          <PrivateRoute path={routes.jogs} exact={true}>
            <JogsPage
              jogs={jogs}
              setJogs={setJogs}
              dateFrom={dateFrom}
              dateTo={dateTo}
            />
          </PrivateRoute>
          <PrivateRoute path={routes.info} exact={true}>
            <InfoPage />
          </PrivateRoute>
          <PrivateRoute path={routes.jogEditor} exact={true}>
            <JogEditor />
          </PrivateRoute>
          <PrivateRoute path={`${routes.jogEditor}/:id`}
            component={(routeProps) => {
              const jog = jogs.find(jog => jog.id === +routeProps.match.params.id);
              return <JogEditor {...jog} />
            }
            }
          />
          <Route path='*'>
            <Redirect to={routes.jogs} />
          </Route>
        </Switch>
      </div>
    </>
  );
};


