import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HeaderActions } from './index';

describe('Header actions test', () => {
  let component;

  beforeEach(() => {
    component = mount(
      <Router>
        <HeaderActions />
      </Router>,
    );
  });

  it('should render Joke component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
