import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { OnboardingStackParamList } from '../navigation/OnboardingStack';
import { useTranslation } from 'react-i18next';
import i18n from '../utils/i18n';
import { setAppLanguage, setOnboardingDone } from '../utils/storage';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'Language'>;

const LANGS = [
  { code: 'en', labelKey: 'language.english' },
  { code: 'ro', labelKey: 'language.romani' },
];

export default function LanguageSelectionScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(i18n.language);

  const toRoot = (route: 'Auth' | 'Main') =>
    navigation.getParent()?.dispatch(
      CommonActions.reset({ index: 0, routes: [{ name: route }] })
    );

  const handleContinue = async () => {
    await setAppLanguage(selected);
    i18n.changeLanguage(selected);
    await setOnboardingDone(true);
    toRoot('Auth');
  };

  const handleGuest = () => {
    toRoot('Main');
  };

  return (
    <View style={{ flex: 1, padding: 16, gap: 14, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 8 }}>
        {t('language.choose')}
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
            {t(l.labelKey)} {selected === l.code ? '✓' : ''}
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
          {t('language.continue')}
        </Text>
      </Pressable>

      <Pressable onPress={handleGuest} style={{ padding: 12, marginTop: 12, alignItems: 'center' }}>
        <Text style={{ textDecorationLine: 'underline' }}>{t('language.guest')}</Text>
      </Pressable>
    </View>
  );
}
