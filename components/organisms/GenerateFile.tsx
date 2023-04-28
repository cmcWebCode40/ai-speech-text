import { useThemedStyles } from 'libs/hooks';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from 'components/atoms';

type GenerateFileProps = {
  cancel: () => void;
  onGenerateFile: () => void;
};

export const GenerateFile: React.FunctionComponent<GenerateFileProps> = ({
  cancel,
  onGenerateFile,
}) => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.container}>
      <Button variant='contained' onPress={onGenerateFile}>
        Generate file
      </Button>
      <Button onPress={cancel} variant='outlined'>
        Cancel
      </Button>
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
