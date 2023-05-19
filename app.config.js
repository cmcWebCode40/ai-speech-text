import 'dotenv/config';

const Config = {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
};

export default {
  expo: {
    name: 'AI Speech Text',
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
      },
      bundleIdentifier: 'ai-speech-text',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      blockedPermissions: ['android.permission.RECORD_AUDIO'],
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
