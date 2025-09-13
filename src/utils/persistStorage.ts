import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

/*
  The PersistStorage module is a utility module that provides functions to persist
  and retrieve data from the device's storage. It is dependency agnostic so we are
  able to switch from one dependency to another without changing the code that uses
  this module. It also helps us to keep track of the keys that are used to persist
  and provides autocomplete when using the methods.
*/

/**
 * Represents the keys for persisted items.
 */
export type PersistKey = 'isFirstTime' | 'isAuthenticated';

/**
 * Retrieves the value of a persisted item.
 * @param key - The key of the persisted item.
 * @param uniqueIdentifier - (Optional) The unique identifier for the item.
 * @returns A promise that resolves to the value of the persisted item.
 */
export async function getPersistedItem(
  key: PersistKey,
  uniqueIdentifier?: string
) {
  return AsyncStorage.getItem(getPersistedItemKey(key, uniqueIdentifier));
}

/**
 * Sets the value of a persisted item.
 * @param key - The key of the persisted item.
 * @param value - The value to be persisted.
 * @param uniqueIdentifier - (Optional) The unique identifier for the item.
 * @returns A promise that resolves when the item is successfully persisted.
 */
export async function setPersistedItem(
  key: PersistKey,
  value: string,
  uniqueIdentifier?: string
) {
  return AsyncStorage.setItem(
    getPersistedItemKey(key, uniqueIdentifier),
    value
  );
}

/**
 * Removes a persisted item.
 * @param key - The key of the persisted item to be removed.
 * @param uniqueIdentifier - (Optional) The unique identifier for the item.
 * @returns A promise that resolves when the item is successfully removed.
 */
export async function removePersistedItem(
  key: PersistKey,
  uniqueIdentifier?: string
) {
  return AsyncStorage.removeItem(getPersistedItemKey(key, uniqueIdentifier));
}

/**
 * Clears all persisted items.
 * @returns A promise that resolves when all items are successfully cleared.
 */
export async function clearPersistedStore() {
  const asyncStorageKeys = await getAllPersistedKeys();

  if (asyncStorageKeys.length === 0) {
    return;
  }

  // When using .clear() on iOS when the storage is empty
  // it throws an error thats why we remove only existing
  // keys.
  if (Platform.OS === 'ios') {
    return AsyncStorage.multiRemove(asyncStorageKeys);
  }

  // When using .multiRemove() on Android when the storage
  // is empty it throws an error so we go back to use .clear()
  if (Platform.OS === 'android') {
    return AsyncStorage.clear();
  }
}

/**
 * Retrieves all keys of persisted items.
 * @returns A promise that resolves to an array of all persisted keys.
 */
export async function getAllPersistedKeys() {
  return await AsyncStorage.getAllKeys();
}

/**
 * Retrieves the values of multiple persisted items.
 * @param keys - An array of keys for the persisted items.
 * @param callback - (Optional) A callback function to handle the results.
 * @returns A promise that resolves to an array of key-value pairs for the persisted items.
 */
export async function setAllPersistedKeys(
  keys: PersistKey[],
  callback?: () => void
) {
  return AsyncStorage.multiGet(keys, callback);
}

export function usePersistStorage(key: PersistKey) {
  return {
    getPersistedItem: (uniqueIdentifier?: string) =>
      getPersistedItem(key, uniqueIdentifier),
    setPersistedItem: (value: string, uniqueIdentifier?: string) =>
      setPersistedItem(key, value, uniqueIdentifier),
    removePersistedItem: (uniqueIdentifier?: string) =>
      removePersistedItem(key, uniqueIdentifier),
  };
}

// Unique identifier is used to keep track of multiple values over a single
// typed key, e.g. "@business-id" with unique identifier abdef, will be
// stored as "@business-id-abdef".
function getPersistedItemKey(key: PersistKey, uniqueIdentifier?: string) {
  if (!uniqueIdentifier) {
    return key;
  }
  return `${key}-${uniqueIdentifier}`;
}
