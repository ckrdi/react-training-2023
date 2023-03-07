import { render, screen } from '@testing-library/react';
import Todo from '../Todo';

jest.mock("react-redux", () => {
  return {
    useSelector: () => [
      {
        index: 1,
        name: "test",
      }
    ],
    useDispatch: () => {},
  };
});

test('renders post text', () => {
  render(<Todo />);
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
