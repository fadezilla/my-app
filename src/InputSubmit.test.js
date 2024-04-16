import { render, screen, fireEvent } from '@testing-library/react';
import InputSubmit from './InputSubmit';

test('submits on enter key press', () => {
const onSubmit = jest.fn();
  render(<InputSubmit onSubmit={onSubmit} />);
  const input = screen.getByType('text');
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
  expect(onSubmit).toHaveBeenCalledTimes(1);
});

