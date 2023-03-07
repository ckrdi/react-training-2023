import { render, screen } from '@testing-library/react';
import Counter from '../Counter';

jest.mock("../Button", () => {
  return () => <button>Mock Button</button>;
});

jest.mock("react-redux", () => {
  return {
    useSelector: () => {},
    useDispatch: () => {},
  };
});

test('renders post text', () => {
  render(<Counter />);
  const linkElement = screen.getByText(/Post/i);
  expect(linkElement).toBeInTheDocument();
});
