import * as Clipboard from 'expo-clipboard';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from 'libs/helpers';
import { useThemedStyles } from 'libs/hooks';
import { colors, Theme } from 'libs/themes';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { Icon, Typography } from 'components/atoms';

type TranscriptionCardProps = {
  transcript: string;
};
const TIMEOUT_DURATION_SECOND = 3000;
export const TranscriptionCard: React.FunctionComponent<
  TranscriptionCardProps
> = ({ transcript }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const style = useThemedStyles(styles);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(transcript);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, TIMEOUT_DURATION_SECOND);
  };

  return (
    <View style={style.container}>
      <Typography style={style.transcriptText}>{transcript}</Typography>
      <Pressable
        onPress={copyToClipboard}
        style={style.copyTopClipboardContainer}
      >
        <Typography style={style.copyText}>
          {isCopied ? 'Copied' : 'Copy'}
        </Typography>
        <Icon name='copy-outline' color={colors.light.white} />
      </Pressable>
    </View>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: theme.colors.gray100,
      maxHeight: heightPixel(300),
    },
    copyTopClipboardContainer: {
      paddingVertical: pixelSizeVertical(8),
      paddingHorizontal: pixelSizeHorizontal(10),
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.textSecondary,
      borderBottomLeftRadius: theme.radius.lg,
      borderBottomRightRadius: theme.radius.lg,
    },
    copyText: {
      color: theme.colors.white,
    },
    transcriptText: {
      paddingVertical: pixelSizeVertical(8),
      borderRadius: theme.radius.lg,
      paddingHorizontal: pixelSizeHorizontal(10),
    },
  });
};
