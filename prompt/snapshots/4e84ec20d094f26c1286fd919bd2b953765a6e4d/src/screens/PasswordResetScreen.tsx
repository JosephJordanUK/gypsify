import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { sendPasswordResetEmail } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { useTranslation } from 'react-i18next';
import { auth } from '../services/firebase';
import { AuthStackParamList } from '../navigation/AuthStack';

type Props = NativeStackScreenProps<AuthStackParamList, 'PasswordReset'>;

export default function PasswordResetScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!email) {
      Alert.alert(t('auth.reset.missing'));
      return;
    }
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email.trim());
      Alert.alert(t('auth.reset.sentTitle'), t('auth.reset.sentMsg'), [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (err: unknown) {
      let msg = t('auth.reset.errors.generic');
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/invalid-email':
            msg = t('auth.reset.errors.invalidEmail');
            break;
          case 'auth/user-not-found':
            msg = t('auth.reset.errors.notFound');
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
      <Text style={{ fontSize: 28, fontWeight: '700' }}>{t('auth.reset.title')}</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        placeholder={t('auth.reset.email')}
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
        {loading ? <ActivityIndicator /> : <Text style={{ color: '#fff', fontWeight: '600' }}>{t('auth.reset.send')}</Text>}
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Login')} style={{ padding: 8 }}>
        <Text style={{ textDecorationLine: 'underline' }}>{t('auth.reset.back')}</Text>
      </Pressable>
    </View>
  );
}