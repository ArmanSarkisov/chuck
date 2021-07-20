import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { FormField } from './index';

describe('FormField test', () => {
  let component;
  let mockCallback;
  let mockObject;

  beforeEach(() => {
    mockCallback = jest.fn();
    mockObject = { mock: true };
    component = shallow(
      <FormField
        message="message"
        register={mockCallback}
        control={mockObject}
        placeholder="placeholder"
        type="text"
        text="some text"
        inputId="id"
      />,
    );
  });

  it('should render Card component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render props register', () => {
    expect(mockCallback.mock.calls.length).toBe(0);
  });
});
