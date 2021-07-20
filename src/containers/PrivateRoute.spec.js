import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { Favorites } from '../pages/Favorites';

describe('App component', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <Router>
        <PrivateRoute component={<Favorites />} />
      </Router>,
    );
  });

  it('should render Joke component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
