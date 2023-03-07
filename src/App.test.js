import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock("./component/Counter", () => {
  return () => <div>Mock Counter</div>;
});

jest.mock("./component/Todo", () => {
  return () => <div>Mock Todo</div>;
});

jest.mock("./component/TodoAdd", () => {
  return () => <div>Mock Todo Add</div>;
});

test('renders post text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Posts/i);
  expect(linkElement).toBeInTheDocument();
});
