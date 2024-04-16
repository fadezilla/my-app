import { render, screen, fireEvent } from '@testing-library/react';
import EmailInput from './EmailInput';

test('captures the email input on change', () => {
const handleChange = jest.fn();
  render(<EmailInput onChange={handleChange} />);
  const input = screen.getByType('email');
  fireEvent.change(input, { target: { value: 'user@example.com' } });
  expect(handleChange).toHaveBeenCalledWith('user@example.com');
});