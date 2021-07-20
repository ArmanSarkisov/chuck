import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const [cookies] = useCookies();

  return !cookies.accessToken ? (
    <Redirect to="/auth/login" />
  ) : (
    <Route {...otherProps} render={(props) => <Component {...props} />} />
  );
};
