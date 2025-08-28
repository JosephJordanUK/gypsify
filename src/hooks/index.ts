// src/hooks/index.ts
import { useCallback, useEffect, useRef } from 'react';

/**
 * Boolean toggle utility.
 */
export function useBoolean(initial = false) {
  const valueRef = useRef<boolean>(initial);
  const set = (next: boolean) => { valueRef.current = next; };
  const setTrue = () => set(true);
  const setFalse = () => set(false);
  const toggle = () => set(!valueRef.current);
  return { get value() { return valueRef.current; }, set, setTrue, setFalse, toggle };
}

/**
 * Returns a stable function that reports whether the component is mounted.
 */
export function useIsMounted(): () => boolean {
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);
  return useCallback(() => mountedRef.current, []);
}