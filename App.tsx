import 'react-native-gesture-handler';
import React from 'react';
import './src/utils/i18n';
import RootNavigator from './src/navigation/RootNavigator';
import { app } from './src/services/firebase';

export default function App() {
  return <RootNavigator />;
}

console.log('firebase projectId:', app.options.projectId);
