import { useEffect } from 'react';
import { useStore } from 'effector-react';

// store
import { jokesState } from '../../store';

// components
import { Table } from '../../components/Table';
import { Joke } from '../../components/Joke';
import { jokesEvents } from '../../store/jokes/jokes.effector';

export const Jokes = () => {
  const jokes = useStore(jokesState.jokes);

  useEffect(() => () => jokesEvents.clearJokeEvent(), []);

  return (
    <div className="container mx-auto">
      <Joke />
      <div className="container mx-auto pt-32">
        <Table data={jokes} />
      </div>
    </div>
  );
};
