import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import { signInWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth } from '../services/firebase';
import { AuthStackParamList } from '../navigation/AuthStack';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Missing fields', 'Enter email and password.');
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      const u = auth.currentUser;
      if (!u?.emailVerified) {
        Alert.alert(
          'Email not verified',
          'Verify your email. You can resend the verification link.',
          [
            {
              text: 'Resend link',
              onPress: async () => {
                if (auth.currentUser) await sendEmailVerification(auth.currentUser);
                await signOut(auth);
              },
            },
            {
              text: 'OK',
              onPress: async () => {
                await signOut(auth);
              },
              style: 'cancel',
            },
          ]
        );
        return;
      }
      navigation.getParent()?.dispatch(
        CommonActions.reset({ index: 0, routes: [{ name: 'Main' }] })
      );
    } catch (err: unknown) {
      let msg = 'Sign in failed.';
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/invalid-email':
            msg = 'Invalid email address.';
            break;
          case 'auth/user-disabled':
            msg = 'This user is disabled.';
            break;
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            msg = 'Email or password is incorrect.';
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
      <Text style={{ fontSize: 28, fontWeight: '700' }}>Login</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        placeholder="Email"
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 12, padding: 12 }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Password"
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 12, padding: 12 }}
      />
      <Pressable
        onPress={handleSignIn}
        disabled={loading}
        style={{
          padding: 14,
          borderRadius: 12,
          backgroundColor: '#111',
          alignItems: 'center',
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? <ActivityIndicator /> : <Text style={{ color: '#fff', fontWeight: '600' }}>Sign In</Text>}
      </Pressable>
      <Pressable onPress={() => navigation.navigate('PasswordReset')} style={{ padding: 8 }}>
        <Text style={{ textDecorationLine: 'underline' }}>Forgot password?</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Signup')} style={{ padding: 8 }}>
        <Text style={{ textDecorationLine: 'underline' }}>Create account</Text>
      </Pressable>
    </View>
  );
}
