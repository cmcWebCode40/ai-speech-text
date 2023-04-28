import { heightPixel } from 'libs/helpers';
import { useThemedStyles } from 'libs/hooks';
import LottieView from 'lottie-react-native';
import React, { useCallback, useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type RecordButtonProps = {
  onStart: () => void;
  onStop: () => void;
};

export const RecordButton: React.FunctionComponent<RecordButtonProps> = ({
  onStart,
  onStop,
}) => {
  const [isListening, setIsListening] = useState(false);
  const animation = useRef<LottieView>(null);
  const style = useThemedStyles(styles);

  const handleStopListening = useCallback(() => {
    animation.current?.reset();
    setIsListening(false);
    onStop();
  }, [animation, onStop]);

  const handleStartListening = useCallback(() => {
    animation.current?.play();
    setIsListening(true);
    onStart();
  }, [animation, onStart]);

  const handleAnimation = useCallback(() => {
    if (isListening) {
      handleStopListening();
    } else {
      handleStartListening();
    }
  }, [isListening, handleStartListening, handleStopListening]);

  return (
    <View style={style.animationContainer}>
      <Pressable style={style.button} onPress={handleAnimation}>
        <LottieView
          autoPlay={false}
          autoSize={true}
          speed={1.5}
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
      height: heightPixel(150),
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
  });
};
