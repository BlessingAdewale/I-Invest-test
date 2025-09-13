const IS_PROD = process.env.APP_VARIANT === 'production';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_PROD) {
    return 'com.I-Invest.app';
  }

  if (IS_PREVIEW) {
    return 'com.I-Invest.app.preview';
  }

  return 'com.I-Invest.app.dev';
};

const getAppName = () => {
  if (IS_PROD) {
    return 'I-Invest';
  }

  if (IS_PREVIEW) {
    return 'I-Invest (Preview)';
  }

  return 'I-Invest (Dev)';
};

export default {
  expo: {
    name: getAppName(),
    slug: 'parthian',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'I-Invest',
    userInterfaceStyle: 'automatic',
    // Enable the new Android architecture (Fabric + TurboModules)
    newArchEnabled: true,
    ios: {
      bundleIdentifier: getUniqueIdentifier(),
      supportsTablet: true,
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      package: 'com.I-Invest.app',
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#1A73E8',
      },
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 300,
          resizeMode: 'contain',
          backgroundColor: '#411363',
        },
      ],
      [
        'expo-secure-store',
        {
          configureAndroidBackup: true,
          faceIDPermission:
            'Allow $(PRODUCT_NAME) to access your Face ID biometric data.',
        },
      ],
      [
        'expo-image-picker',
        {
          photosPermission: 'Allow $(PRODUCT_NAME) to access your photos.',
        },
      ],
      [
        'expo-font',
        {
          fonts: [
            './assets/fonts/EncodeSansSemiExpanded-Bold.ttf',
            './assets/fonts/EncodeSansSemiExpanded-Medium.ttf',
            './assets/fonts/EncodeSansSemiExpanded-Regular.ttf',
            './assets/fonts/EncodeSansSemiExpanded-SemiBold.ttf',
            './assets/fonts/Lato-Black.ttf',
            './assets/fonts/Lato-Bold.ttf',
            './assets/fonts/Lato-Regular.ttf',
            './assets/fonts/SourceSans-Bold.ttf',
            './assets/fonts/SourceSans-Medium.ttf',
            './assets/fonts/SourceSans-Regular.ttf',
            './assets/fonts/SourceSans-SemiBold.ttf',
            './assets/fonts/TikTokSans-Bold.ttf',
            './assets/fonts/TikTokSans-Medium.ttf',
            './assets/fonts/TikTokSans-Regular.ttf',
            './assets/fonts/TikTokSans-SemiBold.ttf',
          ],
        },
      ],
      [
        'react-native-edge-to-edge',
        {
          android: {
            enforceNavigationBarContrast: false,
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    updates: {
      url: 'https://u.expo.dev/5ec43922-0773-4c4a-a647-b3335217c838',
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
    extra: {
      APP_VARIANT: process.env.APP_VARIANT,
      eas: {
        projectId: 'be9e6b48-ebf2-403e-b20b-beae1090259f',
      },
    },
    owner: 'parthian',
  },
};
