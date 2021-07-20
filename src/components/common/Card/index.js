import { ReactComponent as Heart } from '../../../assets/icons/heart.svg';
import { ReactComponent as HeartFilled } from '../../../assets/icons/heartFilled.svg';

export const Card = ({
  joke,
  joke: { joke: text = '', categories = [] } = {},
  addToFavorite,
  isFavorite,
}) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">The Coolest Joke</div>
      <p className="text-gray-700 text-base">
        {text || 'Click on button get random text'}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {categories?.map((category) => (
        <span
          key={category}
          className="span inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          #{category}
        </span>
      ))}
    </div>
    {text && (
      <div className="flex justify-center pb-4">
        <button type="button" onClick={() => addToFavorite(joke)}>
          {isFavorite ? <HeartFilled /> : <Heart />}
        </button>
      </div>
    )}
  </div>
);
