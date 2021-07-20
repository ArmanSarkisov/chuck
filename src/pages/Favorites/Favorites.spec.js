import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Favorites } from './index';

describe('Favorites page test', () => {
  let component;
  beforeEach(() => {
    component = mount(<Favorites />);
  });

  it('should render Favorite component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
