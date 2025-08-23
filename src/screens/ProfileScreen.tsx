import React, { useCallback, useState } from 'react';
import { View, Text, Pressable, Alert, ActivityIndicator } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth } from '../services/firebase';
import { resetAppStateDev } from '../utils/storage';
import type { RootStackParamList } from '../navigation/RootNavigator';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootNav = NativeStackNavigationProp<RootStackParamList>;

export default function ProfileScreen() {
  const navigation = useNavigation<RootNav>();
  const [loading, setLoading] = useState(false);

  const handleSignOut = useCallback(async () => {
    setLoading(true);
    try {
      await signOut(auth);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Auth' }],
        })
      );
    } catch (err: unknown) {
      let msg = 'Sign out failed.';
      if (err instanceof FirebaseError) msg = err.message;
      Alert.alert('Error', msg);
    } finally {
      setLoading(false);
    }
  }, [navigation]);

  const handleDevReset = useCallback(async () => {
    await resetAppStateDev();
    Alert.alert('Reset', 'App state cleared. Restart to see Language Selection.');
  }, []);

  return (
    <View style={{ flex: 1, padding: 16, gap: 14, justifyContent: 'center' }}>
      <Text style={{ fontSize: 28, fontWeight: '700' }}>Profile</Text>

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
        {loading ? <ActivityIndicator /> : <Text style={{ color: '#fff', fontWeight: '600' }}>Sign out</Text>}
      </Pressable>

      {/* DEV ONLY: long-press to clear onboarding/auth/language */}
      <Pressable
        onLongPress={handleDevReset}
        delayLongPress={400}
        style={{ padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#ccc' }}
      >
        <Text>Long-press: Reset App State (Dev)</Text>
      </Pressable>
    </View>
  );
}
