import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { useTranslation } from 'react-i18next';
import { auth } from '../services/firebase';
import { AuthStackParamList } from '../navigation/AuthStack';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const goMain = () =>
    navigation.getParent()?.dispatch(
      CommonActions.reset({ index: 0, routes: [{ name: 'Main' }] })
    );

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert(t('auth.login.missing'));
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      const u = auth.currentUser;

      if (u && !u.emailVerified) {
        Alert.alert(
          t('auth.login.notVerifiedTitle'),
          t('auth.login.notVerifiedMsg'),
          [
            {
              text: t('auth.login.resend'),
              onPress: async () => {
                try {
                  await sendEmailVerification(u);
                  Alert.alert(t('auth.login.sentTitle'), t('auth.login.sentMsg'));
                } catch (err: unknown) {
                  const msg =
                    err instanceof FirebaseError
                      ? err.message
                      : t('auth.login.errors.generic');
                  Alert.alert('Error', msg);
                } finally {
                  goMain();
                }
              },
            },
            { text: t('auth.login.continue'), onPress: goMain },
          ]
        );
        return;
      }

      goMain();
    } catch (err: unknown) {
      let msg = t('auth.login.errors.generic');
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/invalid-email':
            msg = t('auth.login.errors.invalidEmail');
            break;
          case 'auth/user-disabled':
            msg = t('auth.login.errors.userDisabled');
            break;
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            msg = t('auth.login.errors.badCreds');
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
      <Text style={{ fontSize: 28, fontWeight: '700' }}>{t('auth.login.title')}</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        placeholder={t('auth.login.email')}
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 12, padding: 12 }}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder={t('auth.login.password')}
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
        {loading ? <ActivityIndicator /> : <Text style={{ color: '#fff', fontWeight: '600' }}>{t('auth.login.signIn')}</Text>}
      </Pressable>

      <Pressable onPress={() => navigation.navigate('PasswordReset')} style={{ padding: 8 }}>
        <Text style={{ textDecorationLine: 'underline' }}>{t('auth.login.forgot')}</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Signup')} style={{ padding: 8 }}>
        <Text style={{ textDecorationLine: 'underline' }}>{t('auth.login.create')}</Text>
      </Pressable>

      <Pressable onPress={goMain} style={{ padding: 12, marginTop: 8, alignItems: 'center' }}>
        <Text style={{ textDecorationLine: 'underline' }}>{t('auth.login.guest')}</Text>
      </Pressable>
    </View>
  );
}
