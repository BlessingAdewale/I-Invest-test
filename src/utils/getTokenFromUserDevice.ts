import * as SecureStore from 'expo-secure-store';

import {
  AUTH_TOKEN_PROMPT_MESSAGE,
  getSecureItem,
  saveSecureItem,
} from './secureStorage';
export const getTokenFromUserDevice = () => {
  return getSecureItem('authToken', {
    requireAuthentication: true,
    authenticationPrompt: AUTH_TOKEN_PROMPT_MESSAGE,
    keychainAccessible: SecureStore.WHEN_UNLOCKED,
  });
};

export const saveTokenToUserDevice = (token: string) => {
  return saveSecureItem('authToken', token);
};
