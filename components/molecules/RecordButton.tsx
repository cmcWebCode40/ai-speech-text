import { heightPixel, widthPixel } from 'libs/helpers';
import { useThemedStyles } from 'libs/hooks';
import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

export const RecordButton: React.FunctionComponent = () => {
  const animation = useRef<LottieView>(null);
  const style = useThemedStyles(styles);

  const handleStartAnimation = () => {
    animation.current?.play();
  };

  return (
    <View style={style.animationContainer}>
      <Pressable onPress={handleStartAnimation}>
        <LottieView
          autoPlay={false}
          ref={animation}
          style={style.lottieContainer}
          source={require('../../assets/animations/recording-button.json')}
        />
      </Pressable>
    </View>
  );
};

const styles = () => {
  return StyleSheet.create({
    animationContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    lottieContainer: {
      height: heightPixel(200),
      width: widthPixel(200),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
