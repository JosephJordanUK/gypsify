import React, { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator, Alert } from 'react-native';
import { auth } from '../services/firebase';
import { sendEmailVerification, reload } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { useTranslation } from 'react-i18next';

export default function VerifyBanner() {
  const { t } = useTranslation();
  const [sending, setSending] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [, forceRender] = useState(0);

  const user = auth.currentUser;
  const show = !!user && !user.emailVerified;
  if (!show) return null;

  const handleResend = async () => {
    if (!user) return;
    setSending(true);
    try {
      await sendEmailVerification(user);
      Alert.alert(t('auth.verifyBanner.sentTitle'), t('auth.verifyBanner.sentMsg'));
    } catch (err: unknown) {
      const msg =
        err instanceof FirebaseError ? err.message : t('auth.verifyBanner.sendError');
      Alert.alert('Error', msg);
    } finally {
      setSending(false);
    }
  };

  const handleRefresh = async () => {
    if (!auth.currentUser) return;
    setRefreshing(true);
    try {
      await reload(auth.currentUser);
      forceRender((n) => n + 1);
    } catch (err: unknown) {
      const msg =
        err instanceof FirebaseError ? err.message : t('auth.verifyBanner.refreshError');
      Alert.alert('Error', msg);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View
      style={{
        width: '100%',
        borderWidth: 1,
        borderColor: '#f1c40f',
        backgroundColor: '#fffbe6',
        padding: 12,
        borderRadius: 12,
      }}
    >
      <Text style={{ fontWeight: '700', marginBottom: 6 }}>
        {t('auth.verifyBanner.title')}
      </Text>
      <Text style={{ marginBottom: 10 }}>{user?.email}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Pressable
          onPress={handleResend}
          disabled={sending}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 14,
            borderRadius: 10,
            backgroundColor: '#111',
            opacity: sending ? 0.7 : 1,
            marginRight: 12,
          }}
        >
          {sending ? (
            <ActivityIndicator />
          ) : (
            <Text style={{ color: '#fff', fontWeight: '600' }}>{t('auth.verifyBanner.resend')}</Text>
          )}
        </Pressable>

        <Pressable
          onPress={handleRefresh}
          disabled={refreshing}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 14,
            borderRadius: 10,
            backgroundColor: '#e0e0e0',
            opacity: refreshing ? 0.7 : 1,
          }}
        >
          {refreshing ? (
            <ActivityIndicator />
          ) : (
            <Text style={{ fontWeight: '600' }}>{t('auth.verifyBanner.refresh')}</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}