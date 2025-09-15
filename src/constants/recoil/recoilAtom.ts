import { atom } from 'recoil';

import { bioDataSchemaType, signInSchemaType } from '../schemas';
import { recoilAtomKeys } from './recoilAtomKeys';

export const isFirstTimeState = atom<null | boolean>({
  key: recoilAtomKeys.isFirstTimeKey,
  default: null,
});
export const authTokenState = atom<string | null>({
  key: recoilAtomKeys.authToken,
  default: null,
});
export const createAccountState = atom<
  (signInSchemaType & bioDataSchemaType) | null
>({
  key: recoilAtomKeys.createAccount,
  default: null,
});
export const portfolioTypeState = atom<string | null>({
  key: "portfolioTypeState",
  default: null,
});
export const USD_TAB = 'USD';
export const NGN_TAB = 'NGN';

export const currencyTabState = atom<string>({
  key: 'currencyTabState',
  default: USD_TAB,
});

