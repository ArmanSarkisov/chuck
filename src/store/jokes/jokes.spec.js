import { createEvent } from 'effector';
import { jokesEffect, jokesState } from './jokes.effector';

let currentHandler;

describe('Get 10 Jokes', () => {
  beforeEach(() => {
    currentHandler = jokesEffect.getJokesEffect.use.getCurrent();
  });
  afterEach(() => {
    jokesEffect.getJokesEffect.use(currentHandler);
  });
  const resetResults = createEvent();

  beforeAll(() => {
    jokesState.jokes.reset(resetResults);
  });

  afterAll(() => {
    jokesState.jokes.off(resetResults);
  });

  it('should be return jokes', async () => {
    resetResults();
    jokesEffect.getJokesEffect.use(() => [{ joke: 'joke' }]);
    await jokesEffect.getJokesEffect();
    expect(jokesState.jokes.getState()).toEqual([{ joke: 'joke' }]);
  });
});

describe('Get one jokes', () => {
  beforeEach(() => {
    currentHandler = jokesEffect.getJokeEffect.use.getCurrent();
  });
  afterEach(() => {
    jokesEffect.getJokeEffect.use(currentHandler);
  });
  const resetResults = createEvent();

  beforeAll(() => {
    jokesState.joke.reset(resetResults);
  });

  afterAll(() => {
    jokesState.joke.off(resetResults);
  });

  it('should be return jokes', async () => {
    resetResults();
    jokesEffect.getJokeEffect.use(() => ({ joke: 'joke' }));
    await jokesEffect.getJokeEffect();
    expect(jokesState.joke.getState()).toEqual({ joke: 'joke' });
  });
});

describe('add joke to favorite', () => {
  const mockJokeData = {
    jokeId: 131,
    user: 'someMongoId',
    joke: 'cool joke',
    categories: [],
  };
  beforeEach(() => {
    currentHandler = jokesEffect.setJokeToFavoriteEffect.use.getCurrent();
  });
  afterEach(() => {
    jokesEffect.setJokeToFavoriteEffect.use(currentHandler);
  });
  const resetResults = createEvent();

  beforeAll(() => {
    jokesState.joke.reset(resetResults);
  });

  afterAll(() => {
    jokesState.joke.off(resetResults);
  });

  it('should be return jokes', async () => {
    resetResults();
    jokesEffect.setJokeToFavoriteEffect.use(() => mockJokeData);
    const returnedData = await jokesEffect.setJokeToFavoriteEffect(
      mockJokeData,
    );
    expect(returnedData).toEqual(returnedData);
  });
});

describe('remove joke from favorite', () => {
  const mockJokeId = 131;
  beforeEach(() => {
    currentHandler = jokesEffect.removeJokeEffect.use.getCurrent();
  });
  afterEach(() => {
    jokesEffect.removeJokeEffect.use(currentHandler);
  });
  const resetResults = createEvent();

  beforeAll(() => {
    jokesState.joke.reset(resetResults);
  });

  afterAll(() => {
    jokesState.joke.off(resetResults);
  });

  it('should be return jokes', async () => {
    resetResults();
    jokesEffect.setJokeToFavoriteEffect.use(() => ({
      message: 'success',
    }));
    const returnedData = await jokesEffect.removeJokeEffect(mockJokeId);
    expect(returnedData).toEqual(returnedData);
  });
});
