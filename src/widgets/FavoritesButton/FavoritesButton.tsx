import React, { FC, useState } from 'react';
import { IMovieDetails } from '../../shared/models/IMovieDetails';
import { addToFavorites, removeFromFavorites } from '../../shared/lib/favorites';

interface FavoritesButtonProps {
  movie: IMovieDetails;
  isFavorite: boolean;
}

const FavoritesButton: FC<FavoritesButtonProps> = ({ movie, isFavorite }) => {
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const handleClickButton = () => {
    if (!isFavorite) {
      addToFavorites(movie);
    } else {
      removeFromFavorites(movie);
    }
    setIsFavoriteState(!isFavoriteState);
  };
  return (
    <button type="button" onClick={handleClickButton}>
      {!isFavoriteState ? 'Add to favorites' : 'Remove from favorites'}
    </button>
  );
};

export default FavoritesButton;
