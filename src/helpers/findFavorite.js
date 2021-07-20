export const findFavorite = (user = {}, favorites = [], joke) => {
  const isFavorite = !!user.favorites?.find((fav) => fav.jokeId === joke.id);
  const localFavorite = !!favorites.find((fav) => fav === joke.id);

  return { isFavorite, localFavorite };
};
