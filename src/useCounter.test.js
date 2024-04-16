import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

test('useCounter increments the count', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
