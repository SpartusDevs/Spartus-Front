import axios from 'axios';
import * as env from '../../env.js';
import { useAuth } from '../contexts/AuthContext';

const $api = axios.create({
  baseURL: `${env.BACK_URL}/api`,
});

const api = () => {
  const { token } = useAuth(); 
  const apiWithToken = axios.create({
    baseURL: `${env.BACK_URL}/api`,
  });

  apiWithToken.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return apiWithToken;
};

export { $api, api };
