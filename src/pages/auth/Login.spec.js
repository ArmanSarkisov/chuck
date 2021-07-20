import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Login } from './Login';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('Login page test', () => {
  let component;
  beforeEach(() => {
    component = mount(<Login />);
  });

  it('should render Joke component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
