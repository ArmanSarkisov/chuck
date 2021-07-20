import { createStore, createEffect, createEvent } from 'effector';
import { toast } from 'react-toastify';

// api
import request from '../../api';

const jokes = createStore([]);
const joke = createStore({});

const clearJokeEvent = createEvent();

const getJokesEffect = createEffect({
  handler: async () => {
    try {
      const { data } = await request('get', '/jokes');

      return data;
    } catch (err) {
      return [];
    }
  },
});

const getJokeEffect = createEffect({
  handler: async () => {
    try {
      const { data } = await request('get', '/jokes/one');

      return data;
    } catch (err) {
      return null;
    }
  },
});

const setJokeToFavoriteEffect = createEffect({
  handler: async (jokeData) => {
    try {
      const { data } = await request('post', '/favorites', {
        ...jokeData,
        jokeId: jokeData.id,
      });

      return data;
    } catch (err) {
      const notify = () => toast.error(err.data.message);
      notify();
      return null;
    }
  },
});

const removeJokeEffect = createEffect({
  handler: async (jokeId) => {
    try {
      const { data } = await request('delete', `/favorites/${jokeId}`);

      return data;
    } catch (err) {
      return null;
    }
  },
});

jokes.on(getJokesEffect.done, (_, { result }) => result);
joke.on(getJokeEffect.done, (_, { result }) => result);
joke.on(clearJokeEvent, () => ({}));

export const jokesEffect = {
  getJokesEffect,
  setJokeToFavoriteEffect,
  removeJokeEffect,
  getJokeEffect,
};

export const jokesEvents = {
  clearJokeEvent,
};

export const jokesState = {
  jokes,
  joke,
};
