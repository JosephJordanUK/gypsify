import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/AuthStack';

type Props = NativeStackScreenProps<AuthStackParamList, 'PasswordReset'>;

export default function PasswordResetScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center', gap: 12 }}>
      <Text style={{ fontSize: 22, textAlign: 'center' }}>Reset password</Text>

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderRadius: 10, padding: 12 }}
      />

      <Pressable
        onPress={() => Alert.alert('Reset', 'Not wired yet')}
        style={{ padding: 14, borderRadius: 12, backgroundColor: '#111' }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Send link</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Login')} style={{ padding: 8 }}>
        <Text style={{ textAlign: 'center' }}>Back to login</Text>
      </Pressable>
    </View>
  );
}
