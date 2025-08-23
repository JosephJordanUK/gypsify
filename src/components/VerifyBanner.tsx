import React, { useMemo, useState } from 'react';
import { View, Text, Pressable, ActivityIndicator, Alert } from 'react-native';
import { auth } from '../services/firebase';
import { sendEmailVerification } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

export default function VerifyBanner() {
  const user = auth.currentUser;
  const show = useMemo(() => !!user && !user.emailVerified, [user]);
  const [sending, setSending] = useState(false);

  if (!show) return null;

  const handleResend = async () => {
    if (!user) return;
    setSending(true);
    try {
      await sendEmailVerification(user);
      Alert.alert('Verification sent', 'Check your inbox for the link.');
    } catch (err: unknown) {
      let msg = 'Could not send verification.';
      if (err instanceof FirebaseError) msg = err.message;
      Alert.alert('Error', msg);
    } finally {
      setSending(false);
    }
  };

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#f1c40f',
        backgroundColor: '#fffbe6',
        padding: 12,
        borderRadius: 12,
        marginBottom: 12,
      }}
    >
      <Text style={{ fontWeight: '700', marginBottom: 6 }}>
        Verify your email to unlock all features
      </Text>
      <Text style={{ marginBottom: 10 }}>{user?.email}</Text>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Pressable
          onPress={handleResend}
          disabled={sending}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 14,
            borderRadius: 10,
            backgroundColor: '#111',
            opacity: sending ? 0.7 : 1,
          }}
        >
          {sending ? (
            <ActivityIndicator />
          ) : (
            <Text style={{ color: '#fff', fontWeight: '600' }}>Resend link</Text>
          )}
        </Pressable>

        <Pressable
          // Wired in Step 3 to call reload()
          disabled
          style={{
            paddingVertical: 10,
            paddingHorizontal: 14,
            borderRadius: 10,
            backgroundColor: '#e0e0e0',
          }}
        >
          <Text style={{ fontWeight: '600' }}>Refresh</Text>
        </Pressable>
      </View>
    </View>
  );
}
