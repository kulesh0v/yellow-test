import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './pages/login/LoginPage';
import JogsPage from './pages/jogs/JogsPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/jogs">
          <JogsPage />
        </Route>
      </Switch>
    </Router>
  );
};


