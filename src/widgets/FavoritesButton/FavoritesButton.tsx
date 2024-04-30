import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMovieDetails } from '../../shared/models/IMovieDetails';
import { addToFavorites, removeFromFavorites } from '../../shared/lib/favorites';
import classes from './FavoritesButton.module.scss';

interface FavoritesButtonProps {
  movie: IMovieDetails;
  isFavorite: boolean;
  login: string;
}

const FavoritesButton: FC<FavoritesButtonProps> = ({ movie, login, isFavorite }) => {
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const navigate = useNavigate();
  const handleClickButton = () => {
    if (!login) {
      navigate('/login');
    } else {
      if (!isFavorite) {
        addToFavorites(login, movie);
      } else {
        removeFromFavorites(login, movie);
      }
      setIsFavoriteState(!isFavoriteState);
    }
  };
  return (
    <button type="button" className={classes.favButton} onClick={handleClickButton}>
      {!isFavoriteState ? 'Add to favorites' : 'Remove from favorites'}
    </button>
  );
};

export default FavoritesButton;
