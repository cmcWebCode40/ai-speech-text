import { pixelSizeVertical } from 'libs/helpers';
import { useThemedStyles } from 'libs/hooks';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, Typography } from 'components/atoms';
import { HeaderNavigation } from 'components/navigations';
import { AppLayout } from 'components/templates';

export const HomeScreen: React.FunctionComponent = () => {
  const style = useThemedStyles(styles);

  return (
    <AppLayout>
      <HeaderNavigation />
      <View style={style.sectionContainer}>
        <Typography>Home screen</Typography>
        <Button variant='contained'>Submit</Button>
      </View>
    </AppLayout>
  );
};

const styles = () => {
  return StyleSheet.create({
    title: {
      marginBottom: pixelSizeVertical(16),
    },
    sectionContainer: {
      marginVertical: pixelSizeVertical(16),
    },
  });
};
