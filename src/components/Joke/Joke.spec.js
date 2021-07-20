import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Joke } from './index';

describe('Label test', () => {
  let component;

  beforeEach(() => {
    component = mount(<Joke />);
  });

  it('should render Joke component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
