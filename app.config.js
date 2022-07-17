// See:
// - https://docs.expo.dev/workflow/configuration
// - https://docs.expo.dev/versions/latest/config/app

const ANDROID_SPECIFIC_CONFIG = {
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/images/adaptive-icon.png',
      backgroundColor: '#ededf1',
    },
  },
  androidStatusBar: {
    barStyle: 'dark-content',
  },
  androidNavigationBar: {
    visible: 'sticky-immersive',
    barStyle: 'dark-content',
    backgroundColor: '#ededf1',
  },
};

const IOS_SPECIFIC_CONFIG = {
  ios: {
    supportsTablet: true,
  },
};

const WEB_SPECIFIC_CONFIG = {
  web: {
    favicon: './src/assets/images/favicon.png',
  },
};

export default {
  name: 'Expo Starter',
  slug: 'expo-starter',
  version: '1.0.0',
  githubUrl: 'https://github.com/carlos3g/expo-starter',
  orientation: 'portrait',
  userInterfaceStyle: 'light',
  backgroundColor: '#ededf1',
  primaryColor: '#5c6cfc',
  icon: './src/assets/images/icon.png',
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ededf1',
  },
  updates: {
    enabled: false,
  },
  assetBundlePatterns: ['**/*'],
  ...ANDROID_SPECIFIC_CONFIG,
  ...IOS_SPECIFIC_CONFIG,
  ...WEB_SPECIFIC_CONFIG,
};
