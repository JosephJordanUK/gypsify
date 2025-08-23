import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import i18n from '../utils/i18n';
import { setAppLanguage, setOnboardingDone } from '../utils/storage';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { CommonActions } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'LangSelect'>;

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'ro', label: 'Romani' },
];

export default function LanguageSelectionScreen({ navigation }: Props) {
  const [selected, setSelected] = useState(i18n.language);

  const handleContinue = async () => {
    await setAppLanguage(selected);
    i18n.changeLanguage(selected);
    await setOnboardingDone(true);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Auth' }],
      })
    );
  };

  const handleGuest = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      })
    );
  };

  return (
    <View style={{ flex: 1, padding: 16, gap: 14, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 8 }}>
        {i18n.t('chooseLanguage', { defaultValue: 'Choose your language' })}
      </Text>

      {LANGS.map((l) => (
        <Pressable
          key={l.code}
          onPress={() => setSelected(l.code)}
          style={{
            padding: 16,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: selected === l.code ? '#888' : '#ccc',
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 16 }}>
            {l.label} {selected === l.code ? '✓' : ''}
          </Text>
        </Pressable>
      ))}

      <Pressable
        onPress={handleContinue}
        style={{
          padding: 16,
          borderRadius: 12,
          backgroundColor: '#111',
          marginTop: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '600' }}>
          {i18n.t('continue', { defaultValue: 'Continue' })}
        </Text>
      </Pressable>

      <Pressable onPress={handleGuest} style={{ padding: 12, marginTop: 12 }}>
        <Text style={{ textDecorationLine: 'underline' }}>Continue as Guest</Text>
      </Pressable>
    </View>
  );
}
