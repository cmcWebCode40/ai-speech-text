import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HOME_SCREEN, LIBRARY_SCREEN } from 'libs/constants';
import { fontPixel, pixelSizeVertical } from 'libs/helpers';
import { useTheme, useThemedStyles } from 'libs/hooks';
import { Theme } from 'libs/themes';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Icon } from 'components/atoms';
import { HomeScreen, LibraryScreen } from 'components/screens';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: HOME_SCREEN,
    icon: 'add- circle',
    component: HomeScreen,
  },
  {
    name: LIBRARY_SCREEN,
    icon: 'reader-outline',
    component: LibraryScreen,
  },
];

export const TabNavigation: React.FunctionComponent = () => {
  const { theme } = useTheme();
  const { tabBarLabelStyle, tabBarStyle } = useThemedStyles(styles);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle,
      }}
    >
      {tabs.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          options={{
            tabBarLabelStyle,
            tabBarIcon: ({ focused }) => (
              <Icon
                name='reader-outline'
                size={20}
                color={focused ? theme.colors.primary : theme.colors.black}
              />
            ),
            tabBarActiveTintColor: theme.colors.primary,
          }}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    tabBarLabelStyle: {
      fontSize: fontPixel(theme.fontSize.m),
      fontFamily: theme.fonts.NunitoSansBold,
      fontWeight: '700',
    },
    tabBarStyle: {
      paddingTop: pixelSizeVertical(4),
      paddingBottom: pixelSizeVertical(20),
    },
  });
};
