import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import PasswordResetScreen from '../screens/PasswordResetScreen';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  PasswordReset: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
    </Stack.Navigator>
  );
}