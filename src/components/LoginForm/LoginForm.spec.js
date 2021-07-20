import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { LoginForm } from './index';

describe('Login test', () => {
  let component;
  const controlMock = { mock: true };
  const mockCallback = jest.fn();
  const mockErrors = { username: { message: 'err' } };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    component = mount(
      <LoginForm
        control={controlMock}
        register={mockCallback}
        handleSubmit={mockCallback}
        handleSendData={mockCallback}
        errors={mockErrors}
      />,
    );
  });

  it('should render Joke component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
