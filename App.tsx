//url polyfill
import 'react-native-url-polyfill/auto';

import { StatusBar } from 'expo-status-bar';
import { AppContext } from 'libs/context';
import React from 'react';
import Toast from 'react-native-toast-message';

import { MainNavigation } from 'components/navigations';

const App: React.FunctionComponent = () => {
  return (
    <AppContext>
      <StatusBar style='auto' />
      <MainNavigation />
      <Toast />
    </AppContext>
  );
};

export default App;
