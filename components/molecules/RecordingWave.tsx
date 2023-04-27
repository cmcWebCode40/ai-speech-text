import { heightPixel, widthPixel } from 'libs/helpers';
import { useThemedStyles } from 'libs/hooks';
import { Theme } from 'libs/themes';
import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export const RecordingWave: React.FunctionComponent<ViewProps> = ({
  style: viewStyles,
  ...otherProps
}) => {
  const animation = useRef<LottieView>(null);
  const style = useThemedStyles(styles);

  return (
    <View {...otherProps} style={[style.animationContainer, viewStyles]}>
      <LottieView
        autoPlay={true}
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
