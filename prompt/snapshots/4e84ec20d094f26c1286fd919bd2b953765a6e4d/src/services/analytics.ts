type Params = Record<string, string | number | boolean | null | undefined>;
export function logEvent(name: string, params?: Params) {
  if (__DEV__) console.log('[analytics]', name, params ?? {});
}
export function setUserId(id: string | null) {
  if (__DEV__) console.log('[analytics] setUserId', id);
}
