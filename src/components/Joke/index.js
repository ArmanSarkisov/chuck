import { useEffect, useState } from 'react';
import { useStore } from 'effector-react';

// store
import { jokesEffect, jokesState } from '../../store';

// components
import { Button } from '../common/Button';
import { Card } from '../common/Card';

export const Joke = () => {
  const joke = useStore(jokesState.joke);
  const [isInterval, setIsInterval] = useState(false);

  useEffect(() => {
    jokesEffect.getJokesEffect();
  }, []);

  const handleGetOneRandomJoke = () => {
    jokesEffect.getJokeEffect();
  };

  const handleGetOneRandomJokeWithInterval = () => {
    setIsInterval((prevState) => !prevState);
  };

  useEffect(() => {
    let intervalId;
    if (isInterval) {
      intervalId = setInterval(() => jokesEffect.getJokeEffect(), 1000);
    }

    return () => clearInterval(intervalId);
  }, [isInterval]);

  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="mb-5">
        <Button text="Get One Random" onClick={handleGetOneRandomJoke} />
      </div>
      <div className="mb-5">
        <Button
          text={isInterval ? 'Stop Interval' : 'Get One Random Interval'}
          onClick={handleGetOneRandomJokeWithInterval}
        />
      </div>
      <Card text={joke?.joke} categories={joke?.categories} />
    </div>
  );
};
