import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('submits the form with username and password', () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);
  fireEvent.change(screen.getByPlaceholderText('Username'), {
    target: { value: 'user1' },
  });
  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: 'password' },
  });
  fireEvent.click(screen.getByText('Submit'));

  expect(handleSubmit).toHaveBeenCalledWith('user1', 'password');
});

