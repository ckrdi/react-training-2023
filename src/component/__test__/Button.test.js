import { render, screen } from '@testing-library/react';
import Button from '../Button';

test('renders post text', () => {
  render(<Button label="Click" />);
  const linkElement = screen.getByText(/Click/i);
  expect(linkElement).toBeInTheDocument();
});
