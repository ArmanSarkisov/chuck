import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Jokes } from './index';

describe('Jokes page test', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Jokes />);
  });

  it('should render Jokes component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
