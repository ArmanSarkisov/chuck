import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Header } from './index';

describe('Header test', () => {
  let component;

  beforeEach(() => {
    component = mount(
      <Router>
        <Header />
      </Router>,
    );
  });

  it('should render Joke component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
