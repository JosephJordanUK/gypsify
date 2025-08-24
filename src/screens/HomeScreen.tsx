import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import VerifyBanner from '../components/VerifyBanner';

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16 }}>
        <VerifyBanner />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 8 }}>
          {t('home.title')}
        </Text>
        <Text>{t('home.welcome')}</Text>
      </View>
    </SafeAreaView>
    // please work.. please i'm begging
  );
}
