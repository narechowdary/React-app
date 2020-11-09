import App from './App';
import renderer from 'react-test-renderer'

test('renders learn react link', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
