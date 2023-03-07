import { render, screen } from '@testing-library/react';
import TodoAdd from '../TodoAdd';

jest.mock("../Button", () => {
  return () => <button>Mock Button</button>;
});

jest.mock("react-redux", () => {
  return {
    useDispatch: () => {},
  };
});

test('renders post text', () => {
  render(<TodoAdd />);
  const linkElement = screen.getByText(/Button/i);
  expect(linkElement).toBeInTheDocument();
});
