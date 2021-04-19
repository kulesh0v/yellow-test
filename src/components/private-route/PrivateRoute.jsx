import { Redirect, Route } from "react-router";
import PropTypes from 'prop-types';
import routes from "../../constants/routes";

export default function PrivateRoute({ path, component, children, exact }) {

  if (localStorage.getItem('jog-tracker-token')) {
    return (
      <Route path={path} component={component} exact>
        {children}
      </Route>
    )
  }

  return <Redirect to={routes.login} />
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func,
  children: PropTypes.object,
}