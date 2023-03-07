import { render, screen } from '@testing-library/react';
import RandomText from '../RandomText';

test('renders post text', () => {
  render(<RandomText text="Posts" />);
  const linkElement = screen.getByText(/Posts/i);
  expect(linkElement).toBeInTheDocument();
});
