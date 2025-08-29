// App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import './src/utils/i18n';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return <RootNavigator />;
}