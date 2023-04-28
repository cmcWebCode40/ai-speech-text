const Config = {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
};

export default {
  expo: {
    name: 'ai-speech-text',
    slug: 'ai-speech-text',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    plugins: ['@react-native-voice/voice'],
    ios: {
      supportsTablet: true,
      infoPlist: {
        NSSpeechRecognitionUsageDescription:
          'This app uses speech recognition to convert  speech to text.',
        // NSCameraUsageDescription:
        //   'This app uses the camera to let user put a photo in his profile page.',
      },
      bundleIdentifier: 'ai-speech-text',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      permissions: ['android.permission.RECORD_AUDIO'],
      package: 'com.anonymous.SpeectToTextApp',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      ...Config,
      eas: {
        projectId: process.env.EXPO_PROJECT_ID,
      },
    },
  },
};