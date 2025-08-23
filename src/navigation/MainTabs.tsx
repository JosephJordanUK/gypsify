import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import '../utils/i18n';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  const { t } = useTranslation();

  return (
    <Tab.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: t('tabs.home', { defaultValue: 'Home' }) }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: t('tabs.search', { defaultValue: 'Search' }) }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{ title: t('tabs.library', { defaultValue: 'Library' }) }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: t('tabs.profile', { defaultValue: 'Profile' }) }}
      />
    </Tab.Navigator>
  );
}