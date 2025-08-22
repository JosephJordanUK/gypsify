import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  onboardingDone: 'onboarding_done',
  appLanguage: 'app_language',
} as const;

export async function setOnboardingDone(v: boolean) {
  await AsyncStorage.setItem(KEYS.onboardingDone, v ? '1' : '0');
}
export async function getOnboardingDone() {
  const v = await AsyncStorage.getItem(KEYS.onboardingDone);
  return v === '1';
}
export async function setAppLanguage(code: string) {
  await AsyncStorage.setItem(KEYS.appLanguage, code);
}
export async function getAppLanguage() {
  return AsyncStorage.getItem(KEYS.appLanguage);
}
export { KEYS };
