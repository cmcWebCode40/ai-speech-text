import { useThemedStyles } from 'libs/hooks';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from 'components/atoms';

export const GenerateFile: React.FunctionComponent = () => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.container}>
      <Button variant='contained'>Generate file</Button>
      <Button variant='outlined'>Cancel</Button>
    </View>
  );
};

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  });
};
