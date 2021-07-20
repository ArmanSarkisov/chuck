import { ReactComponent as HeartIcon } from '../../../assets/icons/heart.svg';
import { ReactComponent as HeartFilledIcon } from '../../../assets/icons/heartFilled.svg';

export const TableActions = ({
  handleAddJokeToFav,
  item,
  isFavorite,
  localFavorite,
}) => (
  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <button
      type="button"
      className="text-indigo-600 hover:text-indigo-900"
      onClick={() => handleAddJokeToFav(item, localFavorite)}
    >
      {isFavorite || localFavorite ? <HeartFilledIcon /> : <HeartIcon />}
    </button>
  </td>
);
