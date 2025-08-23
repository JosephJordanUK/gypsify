import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../services/firebase';
import { getOnboardingDone, getAppLanguage } from '../utils/storage';

import MainTabs from './MainTabs';
import AuthStack from './AuthStack';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';

export type RootStackParamList = {
  LangSelect: undefined;
  Auth: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const [authLoading, setAuthLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const [bootLoading, setBootLoading] = useState(true);
  const [needsLanguage, setNeedsLanguage] = useState(false);

  // Firebase auth
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  // Onboarding/language flags
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [done, lang] = await Promise.all([getOnboardingDone(), getAppLanguage()]);
        if (!mounted) return;
        setNeedsLanguage(!done || !lang);
      } finally {
        if (mounted) setBootLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (authLoading || bootLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  const routeName: keyof RootStackParamList = needsLanguage ? 'LangSelect' : user ? 'Main' : 'Auth';
  const navKey = `${needsLanguage ? 'lang' : user ? 'main' : 'auth'}`;

  return (
    <NavigationContainer>
      <Stack.Navigator
        id={undefined}
        key={navKey}
        initialRouteName={routeName}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LangSelect" component={LanguageSelectionScreen} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
