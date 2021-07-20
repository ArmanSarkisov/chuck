import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Label } from './index';

describe('Label test', () => {
  let component;

  describe('Has error text', () => {
    beforeEach(() => {
      component = shallow(
        <Label error="some error" htmlFor="text" text="cool" />,
      );
    });

    it('should render Label component with Error', () => {
      expect(toJson(component)).toMatchSnapshot();
    });

    it('should render props error', () => {
      const span = component.find('span');
      expect(span.text()).toBe('some error');
    });
  });

  describe('Has not error text', () => {
    beforeEach(() => {
      component = shallow(<Label htmlFor="text" text="cool" />);
    });

    it('should render Label component without Error', () => {
      expect(toJson(component)).toMatchSnapshot();
    });

    it('should render props text', () => {
      const span = component.find('span');
      expect(span.text()).toBe('cool');
    });
  });
});
