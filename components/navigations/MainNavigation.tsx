import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNaviagtionScreens } from 'libs/types';
import React from 'react';

import { TabNavigation } from './TabNavigation';

const Stack = createNativeStackNavigator<MainNaviagtionScreens>();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={'Main'} component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
