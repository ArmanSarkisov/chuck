import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Table } from './index';

describe('Table test', () => {
  let component;
  const mockData = [{ joke: 'text', id: 1 }];

  beforeEach(() => {
    component = shallow(<Table data={mockData} />);
  });

  it('should render Joke component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
