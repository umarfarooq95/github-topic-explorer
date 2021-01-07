import { render } from '@testing-library/react';
import App from './App';

test('renders github topic explorer app', () => {
  const {baseElement} = render(<App />);
  expect(baseElement).toBeInTheDocument();
});
