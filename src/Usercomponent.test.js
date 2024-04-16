import { render, screen, waitFor } from '@testing-library/react';
import UserComponent from './UserComponent';

global.fetch = jest.fn(() =>
Promise.resolve({
    json: () => Promise.resolve({ name: 'Ola Nordmann' }),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

test('displays a user after a fetch call', async () => {
  render(<UserComponent />);

  await waitFor(() =>
    expect(screen.getByText('Ola Nordmann')).toBeInTheDocument(),
  );
});