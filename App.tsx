import { StatusBar } from 'expo-status-bar';
import { AppContext } from 'libs/context';
import { useLoadFonts } from 'libs/hooks';
import React from 'react';

import { Typography } from 'components/atoms';
import { MainNavigation } from 'components/navigations';

const App: React.FunctionComponent = () => {
  const { isFontLoaded } = useLoadFonts();

  if (!isFontLoaded) {
    return <Typography>Loading fonts</Typography>;
  }

  return (
    <AppContext>
      <StatusBar style='auto' />
      <MainNavigation />
    </AppContext>
  );
};

export default App;
