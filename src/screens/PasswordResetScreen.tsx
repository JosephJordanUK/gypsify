import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { sendPasswordResetEmail } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth } from '../services/firebase';
import { AuthStackParamList } from '../navigation/AuthStack';

type Props = NativeStackScreenProps<AuthStackParamList, 'PasswordReset'>;

export default function PasswordResetScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!email) {
      Alert.alert('Missing email', 'Enter your account email.');
      return;
    }
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email.trim());
      Alert.alert('Email sent', 'Check your inbox for reset instructions.', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (err: unknown) {
      let msg = 'Failed to send reset email.';
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/invalid-email':
            msg = 'Invalid email address.';
            break;
          case 'auth/user-not-found':
            msg = 'No user found with this email.';
            break;
        }
      }
      Alert.alert('Error', msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16, gap: 14, justifyContent: 'center' }}>
      <Text style={{ fontSize: 28, fontWeight: '700' }}>Reset password</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        placeholder="Email"
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 12, padding: 12 }}
      />
      <Pressable
        onPress={handleReset}
        disabled={loading}
        style={{
          padding: 14,
          borderRadius: 12,
          backgroundColor: '#111',
          alignItems: 'center',
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? <ActivityIndicator /> : <Text style={{ color: '#fff', fontWeight: '600' }}>Send reset link</Text>}
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Login')} style={{ padding: 8 }}>
        <Text style={{ textDecorationLine: 'underline' }}>Back to sign in</Text>
      </Pressable>
    </View>
  );
}