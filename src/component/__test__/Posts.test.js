import { render, screen } from '@testing-library/react';
import Posts from '../Posts';

let originalFetch;
beforeEach(() => {
  originalFetch = global.fetch;
  global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
          title: "test",
          body: "lorem ipsum",
      })
  }));
});

afterEach(() => {
  global.fetch = originalFetch;
});

test('renders post text', async () => {
  render(<Posts number="1" />);
  const linkElement = await screen.findByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
