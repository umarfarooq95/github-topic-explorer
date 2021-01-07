import { render, screen } from '@testing-library/react';
import TopicName from './TopicName';

test('renders topic name component', () => {
  const {baseElement} = render(<TopicName topicName="react" />);
  expect(screen.getByText('Topic : react')).toBeInTheDocument();
  expect(baseElement).toBeInTheDocument();
});
