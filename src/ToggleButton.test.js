import { render, screen, fireEvent } from '@testing-library/react';
import ToggleButton from './ToggleButton';

test('calls onToggle when button is clicked', () => {
const onToggle = jest.fn();
  render(<ToggleButton onToggle={onToggle} />);
  fireEvent.click(screen.getByText('Toggle'));
  expect(onToggle).toHaveBeenCalledTimes(1);
});