import Constants from 'expo-constants';

import { ENVIRONMENT_VARIABLES, getProcessEnv } from './env';

export const parsedEnv = ENVIRONMENT_VARIABLES.parse(getProcessEnv());

export const envConfig = {
  development: {
    ENVIRONMENT_NAME: 'development',
    BASE_URL: parsedEnv.EXPO_PUBLIC_BASE_URL,
  },
  preview: {
    ENVIRONMENT_NAME: 'preview',
    BASE_URL: parsedEnv.EXPO_PUBLIC_BASE_URL,
  },
  production: {
    ENVIRONMENT_NAME: 'production',
    BASE_URL: parsedEnv.EXPO_PUBLIC_BASE_URL,
  },
} as const;

const currentEnvironment = Constants.expoConfig?.extra?.APP_VARIANT;

// @ts-expect-error - Ignored implicit-any type in next line. Please fix!
export const env = envConfig[
  currentEnvironment || 'development'
] as (typeof envConfig)[keyof typeof envConfig];
