import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrandName } from './index';

describe('Brand name test', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BrandName />);
  });

  it('should render Joke component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
