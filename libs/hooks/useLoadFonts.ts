import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export const useLoadFonts = () => {
  const [fontError, setfontError] = useState<null | string>(null);
  const [isFontLoaded, setIsFontLoadedtError] = useState<boolean>(false);

  const loadFonts = async () => {
    const NunitoSans = require('../../assets/fonts/NunitoSans-Regular.ttf');
    const NunitoSansBold = require('../../assets/fonts/NunitoSans-Bold.ttf');
    const NunitoSansSemiBold = require('../../assets/fonts/NunitoSans-SemiBold.ttf');

    try {
      await SplashScreen.preventAutoHideAsync();
      await Promise.all([
        Font.loadAsync({ NunitoSans }),
        Font.loadAsync({ NunitoSansSemiBold }),
        Font.loadAsync({ NunitoSansBold }),
      ]);
      setIsFontLoadedtError(true);
    } catch (error) {
      if (error instanceof Error) {
        setfontError(error.message);
      }
    } finally {
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return {
    fontError,
    isFontLoaded,
  };
};
