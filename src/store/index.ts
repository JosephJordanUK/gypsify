// src/store/index.ts
import { useSyncExternalStore } from 'react';

type Listener = () => void;

export function createStore<T>(initial: T) {
  let state = initial;
  const listeners = new Set<Listener>();

  const get = () => state;

  const set = (updater: T | ((prev: T) => T)) => {
    state = typeof updater === 'function' ? (updater as (prev: T) => T)(state) : updater;
    listeners.forEach((l) => l());
  };

  const subscribe = (l: Listener) => {
    listeners.add(l);
    return () => listeners.delete(l);
  };

  return { get, set, subscribe };
}

export function useStore<T>(storeObj: { get: () => T; subscribe: (l: Listener) => () => void }): T {
  return useSyncExternalStore(storeObj.subscribe, storeObj.get, storeObj.get);
}