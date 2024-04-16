import { render, screen, fireEvent } from '@testing-library/react';
import HoverComponent from './HoverComponent';

test('triggers onHover when mouseover', () => {
const onHover = jest.fn();
  render(<HoverComponent onHover={onHover} />);
  fireEvent.mouseOver(screen.getByText('Hover over me'));
  expect(onHover).toHaveBeenCalledTimes(1);
});

