import { useCallback, useEffect, useState } from 'react';
import { useStore } from 'effector-react';

// store
import { favoritesEffect, jokesEffect, jokesState } from '../../store';

// components
import { Button } from '../common/Button';
import { Card } from '../common/Card';

export const Joke = () => {
  const joke = useStore(jokesState.joke);
  const [isInterval, setIsInterval] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    jokesEffect.getJokesEffect();
  }, []);

  const handleGetOneRandomJoke = () => {
    setIsFavorite(false);
    jokesEffect.getJokeEffect();
  };

  const handleGetOneRandomJokeWithInterval = useCallback(() => {
    setIsInterval((prevState) => !prevState);
  }, []);

  const handleAddToFavorite = useCallback(
    (item) => {
      if (isFavorite) {
        favoritesEffect.deleteFavoriteEffect(item.id);
        setIsFavorite((prevState) => !prevState);
        return;
      }

      jokesEffect.setJokeToFavoriteEffect(item);
      setIsFavorite((prevState) => !prevState);
    },
    [isFavorite],
  );

  useEffect(() => {
    let intervalId;
    if (isInterval) {
      intervalId = setInterval(() => {
        jokesEffect.getJokeEffect();
        setIsFavorite(false);
      }, 3000);
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
      <Card
        joke={joke}
        isFavorite={isFavorite}
        addToFavorite={handleAddToFavorite}
      />
    </div>
  );
};
