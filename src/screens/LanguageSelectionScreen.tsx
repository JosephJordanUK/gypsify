import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import i18n from '../utils/i18n';
import { setAppLanguage, setOnboardingDone } from '../utils/storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'ro', label: 'Romani' },
];

export default function LanguageSelectionScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<string>(i18n.language);

  return (
    <View style={{ flex: 1, padding: 24, gap: 16, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, textAlign: 'center' }}>{i18n.t('chooseLanguage')}</Text>

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
          <Text style={{ textAlign: 'center' }}>
            {l.label} {selected === l.code ? '✓' : ''}
          </Text>
        </Pressable>
      ))}

      <Pressable
        onPress={async () => {
          await setAppLanguage(selected);
          i18n.changeLanguage(selected);
          await setOnboardingDone(true);
          navigation.replace('Auth');
        }}
        style={{ padding: 16, borderRadius: 12, backgroundColor: '#111', marginTop: 8 }}
      >
        <Text style={{ textAlign: 'center', color: 'white' }}>{i18n.t('continue')}</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.replace('Main')}
        style={{ padding: 12, marginTop: 12 }}
      >
        <Text style={{ textAlign: 'center' }}>Continue as Guest</Text>
      </Pressable>
    </View>
  );
}
