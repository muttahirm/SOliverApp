import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

export const storage = new MMKV();

export const secureStorage = new MMKV({
  id: 'mmkv.secure',
  encryptionKey: 'secure-store-secret-key-123',
});

const createZustandStorage = (store: MMKV) => (): StateStorage => ({
  getItem: (name) => {
    const value = store.getString(name);

    return value ?? null;
  },
  setItem: (name, value) => {
    store.set(name, value);
  },
  removeItem: (name) => {
    store.delete(name);
  },
});

export const zustandStorage = createZustandStorage(storage);
export const zustandSecureStorage = createZustandStorage(secureStorage);
