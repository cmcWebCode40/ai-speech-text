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

type SpeechToTextProps = {
  onStart: () => void;
  onStop: () => void;
  hasStarted: boolean;
  transcripts?: string;
};

export const SpeechToText: React.FunctionComponent<SpeechToTextProps> = ({
  onStart,
  onStop,
  hasStarted,
  transcripts,
}) => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.container}>
      {transcripts ? (
        <TranscriptionCard transcript={transcripts} />
      ) : (
        <View>
          <RecordingWave hasStarted={hasStarted} style={style.wave} />
          <RecordButton onStart={onStart} onStop={onStop} />
        </View>
      )}
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
