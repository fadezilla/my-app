import { render, screen, fireEvent } from '@testing-library/react';
import CounterComponent from './CounterComponent';

describe('CounterComponent', () => {
test('increments count by 1 when the increment button is clicked', () => {
    render(<CounterComponent />);
    const buttonElement = screen.getByText('Increment');
    fireEvent.click(buttonElement);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});