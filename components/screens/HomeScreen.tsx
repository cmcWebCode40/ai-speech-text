import { pixelSizeVertical } from 'libs/helpers';
import { useThemedStyles } from 'libs/hooks';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { HeaderNavigation } from 'components/navigations';
import { GenerateFile } from 'components/organisms';
import { SpeechToText } from 'components/organisms/SpeechToText';
import { AppLayout } from 'components/templates';

export const HomeScreen: React.FunctionComponent = () => {
  const style = useThemedStyles(styles);

  return (
    <AppLayout>
      <HeaderNavigation />
      <View style={style.sectionContainer}>
        <View style={style.speechTextContainer}>
          <SpeechToText />
        </View>
        <View style={style.generateFileContainer}>
          <GenerateFile />
        </View>
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
      justifyContent: 'space-between',
      marginVertical: pixelSizeVertical(16),
    },
    speechTextContainer: {
      marginVertical: pixelSizeVertical(24),
    },
    generateFileContainer: {
      marginVertical: pixelSizeVertical(24),
    },
  });
};
