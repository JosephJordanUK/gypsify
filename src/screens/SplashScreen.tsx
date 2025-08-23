import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';

import { getOnboardingDone, getAppLanguage } from '../utils/storage';
import i18n from '../utils/i18n';
import { auth } from '../services/firebase';
import type { OnboardingStackParamList } from '../navigation/OnboardingStack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'Splash'>;
type RootNav = NativeStackNavigationProp<RootStackParamList>;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    let unsubAuth: (() => void) | null = null;

    (async () => {
      const lang = await getAppLanguage();
      if (lang) i18n.changeLanguage(lang);

      const done = await getOnboardingDone();
      if (!done || !lang) {
        navigation.replace('Language');
        return;
      }

      const rootNav = navigation.getParent<RootNav>();
      unsubAuth = onAuthStateChanged(auth, (u) => {
        rootNav?.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: u ? 'Main' : 'Auth' }],
          })
        );
      });
    })();

    return () => {
      if (unsubAuth) unsubAuth();
    };
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator />
    </View>
  );
}
