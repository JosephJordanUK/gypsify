export function recordError(error: unknown, ctx?: Record<string, unknown>) {
  if (__DEV__) console.error('[crashlytics]', error, ctx ?? {});
}
export function setUserId(id: string | null) {
  if (__DEV__) console.log('[crashlytics] setUserId', id);
}
