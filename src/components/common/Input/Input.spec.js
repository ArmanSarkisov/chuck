import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Input } from './index';

describe('Input test', () => {
  let component;
  let mockCallback;
  let mockObject;

  describe('Has props', () => {
    beforeEach(() => {
      mockCallback = jest.fn();
      mockObject = { mock: true };
      component = shallow(
        <Input
          id="id"
          register={mockCallback}
          control={mockObject}
          placeholder="placeholder"
          type="text"
        />,
      );
    });

    it('should render Card component', () => {
      expect(toJson(component)).toMatchSnapshot();
    });

    it('should render props type', () => {
      const input = component.find('input');
      expect(input.get(0).props.type).toBe('text');
    });

    it('should render props placeholder', () => {
      const input = component.find('input');
      expect(input.get(0).props.placeholder).toBe('placeholder');
    });

    it('should render props id', () => {
      const input = component.find('input');
      expect(input.get(0).props.id).toBe('id');
    });

    it('should render props placeholder', () => {
      const input = component.find('input');
      expect(input.get(0).props.control).toBe(mockObject);
    });

    it('should render props register', () => {
      expect(mockCallback.mock.calls.length).toBe(1);
    });
  });
});
