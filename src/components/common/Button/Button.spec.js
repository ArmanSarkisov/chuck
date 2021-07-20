import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Button } from './index';

describe('Button test', () => {
  let component;
  let mockCallback;
  beforeEach(() => {
    mockCallback = jest.fn();
    component = shallow(<Button text="Some text" onClick={mockCallback} />);
  });

  it('should render Button component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render props text', () => {
    expect(component.text()).toBe('Some text');
  });

  it('should be call event listener', () => {
    const btn = component.find('.bg-blue-500');
    expect(mockCallback.mock.calls.length).toBe(0);
    btn.simulate('click');
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
