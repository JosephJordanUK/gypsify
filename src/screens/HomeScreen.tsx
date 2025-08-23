import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import VerifyBanner from '../components/VerifyBanner';

// HomeScreen — centers main content; verification banner stays at top.
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16 }}>
        <VerifyBanner />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 8 }}>Home</Text>
        <Text>Welcome to Gypsify.</Text>
      </View>
    </SafeAreaView>
  );
}
