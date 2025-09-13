import { useMutation } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

import { LOGIN } from '@/src/constants/routes';
import { axiosInstance } from '@/src/utils/axiosInstance';

export type TSignInValues = {
  identifier: string;
  password: string;
};
export const useSignInMutation = () => {
  return useMutation({
    mutationFn: async (values: TSignInValues) => {
      return axiosInstance.post(LOGIN, values);
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred while signing in.',
      });
    },
  });
};
