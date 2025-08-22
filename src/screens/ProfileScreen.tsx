import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { resetAppStateDev } from '../utils/storage';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      <Text>Profile</Text>

      {/* DEV ONLY: long-press to clear onboarding/auth/language */}
      <Pressable
        onLongPress={async () => {
          await resetAppStateDev();
          Alert.alert('Reset', 'App state cleared. Restart to see Language Selection.');
        }}
        style={{ padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#ccc' }}
      >
        <Text>Long-press: Reset App State (Dev)</Text>
      </Pressable>
    </View>
  );
}
