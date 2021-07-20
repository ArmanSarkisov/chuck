import { createEvent, createStore } from 'effector';

const error = createStore({});

const setErrorEvent = createEvent();

error.on(setErrorEvent, (_, payload) => payload);

export const errorEvents = {
  setErrorEvent,
};

export const errorState = {
  error,
};
