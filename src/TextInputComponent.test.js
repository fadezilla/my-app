import { render, screen, fireEvent } from '@testing-library/react';
import TextInputComponent from './TextInputComponent';

describe('TextInputComponent', () => {
test('calls onTextChange with the input value when text is entered', () => {
    const handleTextChange = jest.fn();
    render(<TextInputComponent onTextChange={handleTextChange} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'testing' } });
    expect(handleTextChange).toHaveBeenCalledWith('testing');
  });
});