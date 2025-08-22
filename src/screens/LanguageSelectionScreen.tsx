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

function LanguageSelectionScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<string>(i18n.language);

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
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
          navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
        }}
        style={{ padding: 16, borderRadius: 12, backgroundColor: '#111', marginTop: 20 }}
      >
        <Text style={{ textAlign: 'center', color: 'white' }}>{i18n.t('continue')}</Text>
      </Pressable>
    </View>
  );
}

export default LanguageSelectionScreen;
