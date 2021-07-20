import { createEffect, createStore } from 'effector';
import Cookies from 'universal-cookie';

// api
import request from '../../api';
import axios from '../../api/axios-instance';

// store
import { errorEvents } from '../error';

const user = createStore({});
const cookies = new Cookies();
const loginEffect = createEffect({
  handler: async (userData) => {
    try {
      const { data } = await request('post', '/auth/login', userData);

      cookies.set('accessToken', data.accessToken, { path: '/' });
      cookies.set('refreshToken', data.refreshToken, { path: '/' });
      cookies.set('user', data.user.id, { path: '/' });

      errorEvents.setErrorEvent({});

      return data.user;
    } catch (err) {
      errorEvents.setErrorEvent(err.data);
      return {};
    }
  },
});

const registerEffect = createEffect({
  handler: async (userData) => {
    try {
      const { data } = await request('post', '/auth/sign-up', userData);

      errorEvents.setErrorEvent({});

      return data;
    } catch (err) {
      errorEvents.setErrorEvent(err.data);
      return null;
    }
  },
});

const getMeEffect = createEffect({
  handler: async () => {
    try {
      const { data } = await axios.get('/users/me');

      return data;
    } catch (err) {
      return null;
    }
  },
});

const userLogoutEffect = createEffect({
  handler: async () => {
    try {
      const refreshToken = cookies.get('refreshToken', { path: '/' });

      const { data } = await request('post', '/auth/logout', {
        refreshToken,
      });

      cookies.remove('refreshToken', { path: '/' });
      cookies.remove('accessToken', { path: '/' });
      cookies.remove('user', { path: '/' });
      return data;
    } catch (err) {
      return null;
    }
  },
});

user.on(loginEffect.done, (_, { result }) => result);
user.on(getMeEffect.done, (_, { result }) => result);
user.on(userLogoutEffect.done, () => ({}));

if (cookies.get('accessToken', { path: '/' })) {
  getMeEffect();
}

export const userEffects = {
  loginEffect,
  getMeEffect,
  userLogoutEffect,
  registerEffect,
};

export const userState = {
  user,
};
