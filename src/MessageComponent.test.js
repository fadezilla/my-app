import { render, screen } from '@testing-library/react';
import MessageComponent from './MessageComponent';

describe('MessageComponent', () => {
test('renders the message passed as a prop', () => {
    const testMessage = 'Hello, this is a test message!';
    render(<MessageComponent message={testMessage} />);
    const messageElement = screen.getByText(testMessage);
    expect(messageElement).toBeInTheDocument();
  });
});