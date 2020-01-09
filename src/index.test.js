import { useStarWarsQuote } from '.'
import { renderHook, act } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('useStarWarsQuote', () => {
   test('should retrun an object with the keys: loading, quote', () => {
      const { result } = renderHook(() => useStarWarsQuote());

      expect(result.current).toHaveProperty('loading');
      expect(result.current).toHaveProperty('quote');
   });

   test('should set loading to true after initial call', async () => {
      const { result } = renderHook(() => useStarWarsQuote());

      expect(result.current.loading).toBe(true);
   });

   test('should return a quote and set loading to false', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useStarWarsQuote());

      await waitForNextUpdate();
      expect(typeof result.current.quote).toBe('string');
      expect(result.current.quote).not.toBe(null);
      expect(result.current.quote).not.toBe('');
      expect(result.current.loading).toBe(false);
   });
})
