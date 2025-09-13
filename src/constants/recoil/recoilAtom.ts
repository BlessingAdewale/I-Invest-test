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

export type TTransactionState = {
  project: string;
  description: string;
  amount: string;
  bankAccount: string;
  accountHolderName: string;
  bank: string;
  transactionApproved: boolean;
  transactionInitiated: boolean;
};

export const transactionTypeState = atom<'income' | 'expenses'>({
  key: 'transactionTypeState',
  default: 'expenses',
});

export const transactionState = atom<TTransactionState>({
  key: recoilAtomKeys.transactionState,

  default: {
    project: '',
    description: '',
    amount: '',
    bankAccount: '',
    accountHolderName: '',
    bank: '',
    transactionApproved: false,
    transactionInitiated: false,
  },
});
