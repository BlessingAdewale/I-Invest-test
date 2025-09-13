import { useMutation } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

import { CREATE_ACCOUNT } from '@/src/constants/routes';
import { axiosInstance } from '@/src/utils/axiosInstance';

export type TCreateAccountValues = {
  phone_number: string;
  email?: string;
  first_name: string;
  last_name: string;
  password: string;
};
export const useCreateAccountMutation = () => {
  return useMutation({
    mutationFn: async (values: TCreateAccountValues) => {
      return axiosInstance.post(CREATE_ACCOUNT, values);
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred while signing up.',
      });
    },
  });
};
