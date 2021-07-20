import axios from 'axios';
import Cookies from 'universal-cookie';

const request = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3010/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
request.interceptors.request.use(
  async (config) => {
    const cookies = new Cookies();
    const token = cookies.get('accessToken', { path: '/' });
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    if (error.response.status === 403 || error.response.status === 401) {
      window.location.replace('http://localhost:3000/auth/login');
    }
    return Promise.reject(error.response);
  },
);
request.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      // eslint-disable-next-line no-underscore-dangle
      !originalRequest._retry
    ) {
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true;
      const cookies = new Cookies();
      const refreshToken = cookies.get('refreshToken');
      const {
        data: { accessToken },
      } = await axios.post(process.env.REFETCH_TOKEN, {
        refreshToken,
      });
      axios.defaults.headers.common.authorization = `Bearer ${accessToken}`;
      cookies.set('accessToken', accessToken, { path: '/' });
      localStorage.setItem('accessToken', accessToken);
      return request(originalRequest);
    }

    if (
      (error.response.status === 403 || error.response.status === 401) &&
      originalRequest.url === process.env.REFETCH_TOKEN
    ) {
      window.location.replace(process.env.REDIRECT_URL);
    }

    return Promise.reject(error.response);
  },
);
export default request;
