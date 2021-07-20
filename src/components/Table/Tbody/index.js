import { findFavorite } from '../../../helpers';
import { Td } from '../Td';
import { TableActions } from '../TableActions';

export const Tbody = ({ data = [], handleAddJokeToFav, user, favorites }) => (
  <tbody className="bg-white divide-y divide-gray-200">
    {data.map((item) => {
      const { localFavorite, isFavorite } = findFavorite(user, favorites, item);
      return (
        <tr key={item.id}>
          <Td text={item.joke} />
          <TableActions
            isFavorite={isFavorite}
            handleAddJokeToFav={handleAddJokeToFav}
            item={item}
            localFavorite={localFavorite}
          />
        </tr>
      );
    })}
  </tbody>
);
