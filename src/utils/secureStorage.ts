import * as SecureStore from 'expo-secure-store';

import { AUTH_TOKEN } from '@/src/constants/storageKeys';

export type PersistKey = typeof AUTH_TOKEN;

export const AUTH_TOKEN_PROMPT_MESSAGE = "Welcome back! Let's verify it's you.";

export async function saveSecureItem(
  key: PersistKey,
  value: string,
  options?: SecureStore.SecureStoreOptions | undefined
) {
  await SecureStore.setItemAsync(key, value, options);
}

export async function getSecureItem(
  key: PersistKey,
  options?: SecureStore.SecureStoreOptions | undefined
) {
  return await SecureStore.getItemAsync(key, options);
}

export async function deleteSecureItem(
  key: PersistKey,
  options?: SecureStore.SecureStoreOptions | undefined
) {
  await SecureStore.deleteItemAsync(key, options);
}
