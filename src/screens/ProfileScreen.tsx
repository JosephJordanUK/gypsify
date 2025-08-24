import React, { useCallback, useState } from 'react';
import { View, Text, Pressable, Alert, ActivityIndicator } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { useTranslation } from 'react-i18next';
import { auth } from '../services/firebase';
import { resetAppStateDev } from '../utils/storage';
import type { RootStackParamList } from '../navigation/RootNavigator';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootNav = NativeStackNavigationProp<RootStackParamList>;

export default function ProfileScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation<RootNav>();
  const [loading, setLoading] = useState(false);

  const handleSignOut = useCallback(async () => {
    setLoading(true);
    try {
      await signOut(auth);
      navigation.dispatch(
        CommonActions.reset({ index: 0, routes: [{ name: 'Auth' }] })
      );
    } catch (err: unknown) {
      const msg = err instanceof FirebaseError ? err.message : t('auth.profile.signOutFailed');
      Alert.alert('Error', msg);
    } finally {
      setLoading(false);
    }
  }, [navigation, t]);

  const handleDevReset = useCallback(async () => {
    await resetAppStateDev();
    Alert.alert('Reset', 'App state cleared. Restart to see Language Selection.');
  }, []);

  return (
    <View style={{ flex: 1, padding: 16, gap: 14, justifyContent: 'center' }}>
      <Text style={{ fontSize: 28, fontWeight: '700' }}>{t('auth.profile.title')}</Text>

      <Pressable
        onPress={handleSignOut}
        disabled={loading}
        style={{
          padding: 14,
          borderRadius: 12,
          backgroundColor: '#111',
          alignItems: 'center',
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? <ActivityIndicator /> : <Text style={{ color: '#fff', fontWeight: '600' }}>{t('auth.profile.signOut')}</Text>}
      </Pressable>

      <Pressable
        onLongPress={handleDevReset}
        delayLongPress={400}
        style={{ padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#ccc' }}
      >
        <Text>{t('auth.profile.devReset')}</Text>
      </Pressable>
    </View>
  );
}