import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import ThemedButton from './ThemedButton';

test('renders with the correct theme', () => {
  render(
    <ThemeProvider value="dark">
      <ThemedButton label="Test Button" />
    </ThemeProvider>,
  );

  const button = screen.getByRole('button', { name: 'Test Button' });
  expect(button).toHaveClass('dark');
});