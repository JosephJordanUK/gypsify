import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './MainTabs';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import SplashScreen from '../screens/SplashScreen';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const [route, setRoute] = useState<'Splash' | 'Onboarding' | 'Main'>('Splash');

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {route === 'Splash' && (
          <Stack.Screen name="Splash">
            {() => <SplashScreen onResolved={setRoute} />}
          </Stack.Screen>
        )}
        {route === 'Onboarding' && (
          <Stack.Screen name="Onboarding" component={LanguageSelectionScreen} />
        )}
        {route === 'Main' && <Stack.Screen name="Main" component={MainTabs} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
