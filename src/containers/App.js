import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// private route
import { PrivateRoute } from './PrivateRoute';

// pages
import { Jokes } from '../pages/Jokes';
import { Login } from '../pages/auth/Login';
import { Favorites } from '../pages/Favorites';
import { Header } from '../components/Header';
import { Register } from '../pages/auth/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ToastContainer />
        <Switch>
          <Route exact path="/jokes" component={Jokes} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/sign-up" component={Register} />
          <PrivateRoute exact path="/favorites" component={Favorites} />
          <Redirect from="*" to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
