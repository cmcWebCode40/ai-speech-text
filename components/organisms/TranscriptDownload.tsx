import { pixelSizeHorizontal, pixelSizeVertical } from 'libs/helpers';
import { useThemedStyles, useTranscript } from 'libs/hooks';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { Button, Typography } from 'components/atoms';
import { TranscriptionCard } from 'components/molecules';

type TranscriptDownloadProps = {
  transcripts: string;
};

export const TranscriptDownload: React.FunctionComponent<
  TranscriptDownloadProps
> = ({ transcripts }) => {
  const style = useThemedStyles(styles);
  const { handleDownloadPDF, isLoading, aISummary, isDownloadingPDf } =
    useTranscript(transcripts);

  return (
    <View style={style.container}>
      <Typography style={style.title} variant='h2'>
        AI Transcript Summary
      </Typography>
      <View>
        {isLoading ? (
          <View style={style.loaderContainer}>
            <ActivityIndicator />
            <Typography style={style.title} variant='p1'>
              Fetching AI Summary
            </Typography>
          </View>
        ) : (
          <>{aISummary && <TranscriptionCard transcript={aISummary} />}</>
        )}
        <View style={style.downloadButtonContainer}>
          <Button
            variant='contained'
            disabled={!!isLoading || !!isDownloadingPDf}
            onPress={handleDownloadPDF}
          >
            {isDownloadingPDf ? 'Downloading Pdf....' : 'Download PDF'}
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = () => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: pixelSizeHorizontal(16),
    },
    downloadButtonContainer: {
      paddingVertical: pixelSizeVertical(30),
    },
    title: {
      marginVertical: pixelSizeVertical(16),
    },
    loaderContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
