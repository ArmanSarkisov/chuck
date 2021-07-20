import { useCallback, useState } from 'react';
import { useStore } from 'effector-react';
import { toast } from 'react-toastify';

// store
import { jokesEffect, userState } from '../../store';

// components
import { Tbody } from './Tbody';
import { Thead } from './Thead';

export const Table = ({ data = [] }) => {
  const user = useStore(userState.user);
  const [favorites, setFavorites] = useState([]);

  const handleAddJokeToFav = useCallback(
    (item, isFavorite) => {
      if (user.favorites?.length === 10) {
        toast.error('You can add only 10 favorite item');
        return;
      }

      if (!isFavorite) {
        jokesEffect.setJokeToFavoriteEffect(item);
        setFavorites((prevState) => [...prevState, item.id]);
        return;
      }

      jokesEffect.removeJokeEffect(item.id);
      setFavorites((prevState) => prevState.filter((i) => i !== item.id));
    },
    [user],
  );

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <Thead />
              <Tbody
                favorites={favorites}
                handleAddJokeToFav={handleAddJokeToFav}
                user={user}
                data={data}
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
