import { render, screen, fireEvent } from '@testing-library/react';
import ToggleComponent from './ToggleComponent';

describe('ToggleComponent', () => {
  test('toggles from Off to On when clicked', () => {
    render(<ToggleComponent />);
    const button = screen.getByRole('button', { name: 'Off' });
    fireEvent.click(button);
    expect(button).toHaveTextContent('On');
  });
});