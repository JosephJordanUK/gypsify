import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { getOnboardingDone, getAppLanguage, getAuthed } from '../utils/storage';
import i18n from '../utils/i18n';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    (async () => {
      const lang = await getAppLanguage();
      if (lang) i18n.changeLanguage(lang);

      const done = await getOnboardingDone();
      if (!done) {
        navigation.replace('Onboarding');
        return;
      }

      const authed = await getAuthed();
      navigation.replace(authed ? 'Main' : 'Auth');
    })();
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator />
    </View>
  );
}
