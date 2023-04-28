import { pixelSizeVertical } from 'libs/helpers';
import { useThemedStyles, useVoice } from 'libs/hooks';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Typography } from 'components/atoms';
import { Modal } from 'components/molecules';
import { HeaderNavigation } from 'components/navigations/HeaderNavigation';
import { GenerateFile, TranscriptDownload } from 'components/organisms';
import { SpeechToText } from 'components/organisms/SpeechToText';
import { AppLayout } from 'components/templates';

export const HomeScreen: React.FunctionComponent = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const style = useThemedStyles(styles);
  const { startRecognizing, stopRecognizing, transcripts, reset, hasStarted } =
    useVoice();

  const handleCloseModal = useCallback(() => {
    setIsModalOpened(false);
  }, []);
  const handleOpenModal = useCallback(() => {
    setIsModalOpened(true);
  }, []);

  if (isModalOpened && transcripts) {
    return (
      <Modal onClose={handleCloseModal} visible={isModalOpened}>
        <TranscriptDownload transcripts={transcripts} />
      </Modal>
    );
  }

  return (
    <AppLayout>
      <HeaderNavigation />
      <Typography style={style.title} variant='h2'>
        AI powered recorder
      </Typography>
      <Typography variant='p1'>
        Tap to Record and translate your speech into text in pdf format and let
        our AI add a summary of the transcripts.
      </Typography>
      <View style={style.sectionContainer}>
        <View style={style.speechTextContainer}>
          <SpeechToText
            hasStarted={hasStarted}
            transcripts={transcripts}
            onStart={startRecognizing}
            onStop={stopRecognizing}
          />
        </View>
        {transcripts ? (
          <View style={style.generateFileContainer}>
            <GenerateFile onGenerateFile={handleOpenModal} cancel={reset} />
          </View>
        ) : null}
      </View>
    </AppLayout>
  );
};

const styles = () => {
  return StyleSheet.create({
    title: {
      marginVertical: pixelSizeVertical(18),
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
