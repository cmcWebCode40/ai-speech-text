import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import SourceSansProBlack from 'assets/fonts/SourceSansPro-Black.ttf';
import SourceSansProBold from 'assets/fonts/SourceSansPro-Bold.ttf';
import SourceSansProExtraLight from 'assets/fonts/SourceSansPro-ExtraLight.ttf';
import SourceSansProLight from 'assets/fonts/SourceSansPro-Light.ttf';
import SourceSansProRegular from 'assets/fonts/SourceSansPro-Regular.ttf';
import SourceSansProSemiBold from 'assets/fonts/SourceSansPro-SemiBold.ttf';

export const useLoadFonts = () => {
  const [fontError, setfontError] = useState<null | string>(null);
  const [isFontLoaded, setIsFontLoadedtError] = useState<boolean>(false);

  const loadFonts = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await Promise.all([
        Font.loadAsync({ SourceSansProBlack }),
        Font.loadAsync({ SourceSansProBold }),
        Font.loadAsync({ SourceSansProExtraLight }),
        Font.loadAsync({ SourceSansProLight }),
        Font.loadAsync({ SourceSansProRegular }),
        Font.loadAsync({ SourceSansProSemiBold }),
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
