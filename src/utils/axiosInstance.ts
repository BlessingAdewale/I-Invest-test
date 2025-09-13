import axios from 'axios';

import { getTokenFromUserDevice } from './getTokenFromUserDevice';
import { env } from '../constants/config';
import {
  CREATE_ACCOUNT,
  LOGIN,
  RESEND_OTP,
  RESET_PASSWORD,
  RESET_PASSWORD_CONFIRM,
  VERIFY_OTP,
} from '../constants/routes';

export const axiosInstance = axios.create({
  baseURL: env.BASE_URL,
});
const excludeUrl: string[] = [
  LOGIN,
  CREATE_ACCOUNT,
  VERIFY_OTP,
  RESEND_OTP,
  RESET_PASSWORD,
  RESET_PASSWORD_CONFIRM,
];

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    const token = getTokenFromUserDevice();
    const isUrlExcluded = excludeUrl.some((url) => url === config.url);
    if (!isUrlExcluded) {
      if (token && config.headers) {
        config.headers.authorization = `${token}`;
      }
    }
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (error) => {
    if (error?.response?.status === 400) {
      return Promise.reject({
        message: error.response?.data?.message || 'Something went wrong',
      });
    }
    return Promise.reject(error);
  }
);
