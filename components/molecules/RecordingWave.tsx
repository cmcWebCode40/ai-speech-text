import { heightPixel, widthPixel } from 'libs/helpers';
import { useThemedStyles } from 'libs/hooks';
import { Theme } from 'libs/themes';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

type RecordingWaveProps = {
  hasStarted: boolean;
} & ViewProps;

export const RecordingWave: React.FunctionComponent<RecordingWaveProps> = ({
  hasStarted,
  style: viewStyles,
  ...otherProps
}) => {
  const animation = useRef<LottieView>(null);
  const style = useThemedStyles(styles);

  useEffect(() => {
    if (hasStarted) {
      animation.current?.play();
    } else {
      animation.current?.reset();
    }
  }, [hasStarted]);

  return (
    <View {...otherProps} style={[style.animationContainer, viewStyles]}>
      <LottieView
        autoPlay={false}
        ref={animation}
        style={style.lottieContainer}
        source={require('../../assets/animations/recording-wave.json')}
      />
    </View>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    animationContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      borderWidth: 2,
      borderColor: theme.colors.gray100,
    },
    lottieContainer: {
      height: heightPixel(200),
      width: widthPixel(200),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
