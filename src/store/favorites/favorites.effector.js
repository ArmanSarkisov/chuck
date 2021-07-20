import { createStore, createEffect } from 'effector';
import request from '../../api';
import { userEffects } from '../user';

const favorites = createStore([]);
const getUserFavoritesEffect = createEffect({
  handler: async () => {
    try {
      const { data } = await request('get', `/favorites/my`);

      return data;
    } catch (err) {
      return [];
    }
  },
});

const deleteFavoriteEffect = createEffect({
  handler: async (jokeId) => {
    try {
      const { data } = await request('delete', `/favorites/${jokeId}`);
      await userEffects.getMeEffect();

      return data;
    } catch (err) {
      return [];
    }
  },
});

favorites.on(getUserFavoritesEffect.done, (_, { result }) => result);
favorites.on(deleteFavoriteEffect.done, (_, { result }) => result);

export const favoritesEffect = {
  getUserFavoritesEffect,
  deleteFavoriteEffect,
};

export const favoritesState = {
  favorites,
};
