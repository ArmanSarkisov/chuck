import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Card } from './index';

describe('Card test', () => {
  let component;
  const mockJoke = { joke: 'some joke', categories: ['category'] };
  const mockCallback = jest.fn();

  describe('Has props', () => {
    beforeEach(() => {
      component = shallow(
        <Card
          joke={mockJoke}
          isFavorite={false}
          addToFavorite={mockCallback}
        />,
      );
    });

    it('should render Card component', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render props text', () => {
      const p = component.find('.text-base');
      expect(p.text()).toBe('some joke');
    });

    it('should render props category', () => {
      const span = component.find('.span');
      expect(span).toHaveLength(1);
    });
  });

  describe('Has not props', () => {
    beforeEach(() => {
      component = shallow(<Card />);
    });

    it('should render Card component without props', () => {
      expect(toJson(component)).toMatchSnapshot();
    });

    it('should render props default text', () => {
      const p = component.find('.text-base');
      expect(p.text()).toBe('Click on button get random text');
    });

    it('should render props default category', () => {
      const span = component.find('.span');
      expect(span).toHaveLength(0);
    });
  });
});
