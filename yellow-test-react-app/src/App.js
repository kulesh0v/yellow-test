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
  useHistory
} from "react-router-dom";
import { auth } from './api';
import JogEditor from './pages/jogEditor/JogEditor';
import Filter from './components/filter/Filter';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('jog-tracker-token'));
  const [filterIsActive, setFilterIsActive] = useState(false);
  const [jogs, setJogs] = useState([]);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  let history = useHistory();

  const onLogin = async () => {
    const res = await auth();
    localStorage.setItem('jog-tracker-token', res.data.response.access_token);
    setIsAuthenticated(true);
    history.push(routes.jogs);
  }

  return (
    <>
      <Header
        isAuthenticated={isAuthenticated}
        setFilterIsActive={setFilterIsActive}
        filterIsActive={filterIsActive}
      />
      {
        filterIsActive &&
        <Filter
          dateFrom={dateFrom}
          setDateFrom={setDateFrom}
          dateTo={dateTo}
          setDateTo={setDateTo}
        />
      }
      {
        !isAuthenticated && < Redirect to={{ pathname: routes.login }} />
      }
      <div className='container'>
        <Switch>
          <Route path={routes.login}>
            <LoginPage onLogin={onLogin} />
          </Route>
          <Route path={routes.jogs}>
            <JogsPage
              jogs={jogs}
              setJogs={setJogs}
              dateFrom={dateFrom}
              dateTo={dateTo}
            />
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
              return <JogEditor {...jog} />
            }}
          />
        </Switch>
      </div>
    </>
  );
};


