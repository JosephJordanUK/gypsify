import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { useTranslation } from 'react-i18next';
import { auth } from '../services/firebase';
import { AuthStackParamList } from '../navigation/AuthStack';

type Props = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

export default function SignupScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const resetToAuth = () =>
    navigation.getParent()?.dispatch(
      CommonActions.reset({ index: 0, routes: [{ name: 'Auth' }] })
    );

  const handleSignup = async () => {
    if (!email || !password || !confirm) {
      Alert.alert(t('auth.signup.missing'));
      return;
    }
    if (password !== confirm) {
      Alert.alert(t('auth.signup.mismatch'));
      return;
    }
    if (password.length < 6) {
      Alert.alert(t('auth.signup.weak'));
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
      }
      Alert.alert(t('auth.signup.verifyTitle'), t('auth.signup.verifyMsg'));
      await signOut(auth);
      resetToAuth();
    } catch (err: unknown) {
      let msg = t('auth.signup.errors.generic');
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/email-already-in-use':
            msg = t('auth.signup.errors.inUse');
            break;
          case 'auth/invalid-email':
            msg = t('auth.signup.errors.invalidEmail');
            break;
          case 'auth/operation-not-allowed':
            msg = t('auth.signup.errors.notAllowed');
            break;
          case 'auth/weak-password':
            msg = t('auth.signup.errors.weak');
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
      <Text style={{ fontSize: 28, fontWeight: '700' }}>{t('auth.signup.title')}</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        placeholder={t('auth.signup.email')}
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 12, padding: 12 }}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder={t('auth.signup.password')}
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 12, padding: 12 }}
      />

      <TextInput
        value={confirm}
        onChangeText={setConfirm}
        secureTextEntry
        placeholder={t('auth.signup.confirm')}
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 12, padding: 12 }}
      />

      <Pressable
        onPress={handleSignup}
        disabled={loading}
        style={{
          padding: 14,
          borderRadius: 12,
          backgroundColor: '#111',
          alignItems: 'center',
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? <ActivityIndicator /> : <Text style={{ color: '#fff', fontWeight: '600' }}>{t('auth.signup.signUp')}</Text>}
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Login')} style={{ padding: 8 }}>
        <Text style={{ textDecorationLine: 'underline' }}>{t('auth.signup.have')}</Text>
      </Pressable>
    </View>
  );
}