import App from './App';
import renderer from 'react-test-renderer'

test('it renders correctly', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});