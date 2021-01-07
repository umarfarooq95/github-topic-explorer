import { render, screen } from '@testing-library/react';
import StargazerCount from './StargazerCount';

test('renders stargazerCount component with given count', () => {
  const {baseElement} = render(<StargazerCount count={10} />);
  expect(screen.getByText('10')).toBeInTheDocument();
  expect(baseElement).toBeInTheDocument();
});
