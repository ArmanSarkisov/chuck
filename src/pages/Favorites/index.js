import { useCallback, useEffect } from 'react';
import { useStore } from 'effector-react';

// icons
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

// store
import { favoritesEffect, favoritesState } from '../../store';

// components
import { Thead } from '../../components/Table/Thead';
import { Td } from '../../components/Table/Td';

export const Favorites = () => {
  const favorites = useStore(favoritesState.favorites);

  useEffect(() => {
    favoritesEffect.getUserFavoritesEffect();
  }, []);

  const handleDeleteFavorite = useCallback((jokeId) => {
    favoritesEffect.deleteFavoriteEffect(jokeId);
  }, []);

  if (!favorites.length) {
    return (
      <div className="pt-10">
        <h2 className="text-center text-2xl">You dont have favorite jokes</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-32">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <Thead />
                <tbody className="bg-white divide-y divide-gray-200">
                  {favorites.map((item) => (
                    <tr key={item.id}>
                      <Td text={item.joke} />
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          type="button"
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => handleDeleteFavorite(item.jokeId)}
                        >
                          <CloseIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
