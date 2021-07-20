import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Register } from './SignUp';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('Register page test', () => {
  let component;
  beforeEach(() => {
    component = mount(<Register />);
  });

  it('should render Joke component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
