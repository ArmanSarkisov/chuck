import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

describe('App component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it('should render Joke component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
