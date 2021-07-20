import { findFavorite } from './findFavorite';

describe('Should return is favorite from api and locally', () => {
  const mockUser = {};
  let mockUserFavorites = [];
  let mockFavorites = [];
  let mockJoke = {};

  it('should return found local favorite', () => {
    mockUserFavorites = [{ jokeId: 12 }];
    mockUser.favorites = mockUserFavorites;
    mockFavorites = [12, 16];
    mockJoke = { id: 16 };
    expect(findFavorite(mockUser, mockFavorites, mockJoke)).toMatchObject({
      isFavorite: false,
      localFavorite: true,
    });
  });

  it('should return found all favorite', () => {
    mockUserFavorites = [{ jokeId: 16 }];
    mockUser.favorites = mockUserFavorites;
    mockFavorites = [12, 16];
    mockJoke = { id: 16 };
    expect(findFavorite(mockUser, mockFavorites, mockJoke)).toMatchObject({
      isFavorite: true,
      localFavorite: true,
    });
  });

  it('should return found api favorite', () => {
    mockUserFavorites = [{ jokeId: 16 }];
    mockUser.favorites = mockUserFavorites;
    mockFavorites = [12, 13];
    mockJoke = { id: 16 };
    expect(findFavorite(mockUser, mockFavorites, mockJoke)).toMatchObject({
      isFavorite: true,
      localFavorite: false,
    });
  });

  it('should return false all', () => {
    expect(findFavorite(mockUser, mockFavorites, mockJoke)).toMatchObject({
      isFavorite: true,
      localFavorite: false,
    });
  });
});
