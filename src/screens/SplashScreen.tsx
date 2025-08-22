import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { getOnboardingDone, getAppLanguage } from '../utils/storage';
import i18n from '../utils/i18n';

type Props = { onResolved: (route: 'Onboarding' | 'Main') => void };

export default function SplashScreen({ onResolved }: Props) {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    (async () => {
      const lang = await getAppLanguage();
      if (lang) i18n.changeLanguage(lang);
      const done = await getOnboardingDone();
      onResolved(done ? 'Main' : 'Onboarding');
      setBooted(true);
    })();
  }, [onResolved]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {!booted && <ActivityIndicator />}
    </View>
  );
}
