import React from 'react';
import { View, Text } from 'react-native';
import VerifyBanner from '../components/VerifyBanner';

// HomeScreen — shows a verification banner for unverified users.
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <VerifyBanner />
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 8 }}>Home</Text>
      <Text>Welcome to Gypsify.</Text>
    </View>
  );
}