import { pixelSizeVertical } from 'libs/helpers';
import { useThemedStyles } from 'libs/hooks';
import { Theme } from 'libs/themes';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  RecordButton,
  RecordingWave,
  TranscriptionCard,
} from 'components/molecules';

const transcript = `The sun was setting over the city, casting a warm orange glow across the buildings. People rushed past each other on the crowded sidewalks, their faces illuminated by the light from their smartphones. A street musician played a mournful tune on his guitar, hoping for a few coins from the passersby. In a nearby café, a couple sat sipping coffee and chatting animatedly, their laughter blending with the hum of the busy street. As darkness fell, the city came alive with a different energy, a vibrant and unpredictable energy that pulsed through its very streets and buildings.`;
export const SpeechToText: React.FunctionComponent = () => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.container}>
      <View>
        <RecordingWave style={style.wave} />
        <RecordButton />
      </View>
      <TranscriptionCard transcript={transcript} />
    </View>
  );
};

const styles = (_theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    wave: {
      marginVertical: pixelSizeVertical(18),
    },
  });
};
