import { FC } from 'react';
import { IMovieDetails } from '../../shared/models/IMovieDetails';
import { classNames } from '../../shared/lib/classNames';
import { checkIsFavorite } from '../../shared/lib/favorites';
import FavoritesButton from '../../widgets/FavoritesButton/FavoritesButton';
import EmptyImage from '../EmptyImage/EmptyImage';
import classes from './MovieItem.module.scss';

interface MovieContainerProps {
  movie: IMovieDetails;
  login: string;
}

const MovieItem: FC<MovieContainerProps> = ({ movie, login }) => {
  const isFavorite = checkIsFavorite(login, movie.imdbID);
  return (
    <section className={classNames('', {}, [classes.movieContainer])}>
      <div className={classes.top}>
        <div className={classes.topLeft}>
          <div>
            {movie.Poster === 'N/A' ? <EmptyImage /> : <img src={movie.Poster} alt={movie.Title} />}
          </div>
        </div>

        <div className={classes.topRight}>
          <div>
            <h2>
              {movie.Title} ({movie.Year})
            </h2>

            <p className={classes.plot}>{movie.Plot}</p>

            <FavoritesButton movie={movie} login={login} isFavorite={isFavorite} />
          </div>

          <div className={classes.about}>
            <h3>About the {movie.Type}</h3>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>Genre:</span>
              <span className={classes.infoValue}>{movie.Genre}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>Released:</span>
              <span className={classes.infoValue}>{movie.Released}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>Runtime:</span>
              <span className={classes.infoValue}>{movie.Runtime}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>Director:</span>
              <span className={classes.infoValue}>{movie.Director}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>Writer:</span>
              <span className={classes.infoValue}>{movie.Writer}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>Actors:</span>
              <span className={classes.infoValue}>{movie.Actors}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>Language:</span>
              <span className={classes.infoValue}>{movie.Language}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>Country:</span>
              <span className={classes.infoValue}>{movie.Country}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>Rated:</span>
              <span className={classes.infoValue}>{movie.Rated}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>Awards:</span>
              <span className={classes.infoValue}>{movie.Awards}</span>
            </div>

            <div className={classNames(classes.infoItem, {}, [classes.raitings])}>
              <span className={classes.infoKey}>Ratings:</span>
              <ul className={classes.ratingUl}>
                {movie.Ratings.map((rating) => (
                  <li
                    className={classNames('', {}, [classes.infoItem, classes.raitingLi])}
                    key={rating.Value}
                  >
                    <span className={classes.infoKey}>{rating.Source}:</span>
                    <span className={classes.infoValue}>{rating.Value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>Metascore:</span>
              <span className={classes.infoValue}>{movie.Metascore}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>imdbRating:</span>
              <span className={classes.infoValue}>{movie.imdbRating}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>imdbVotes:</span>
              <span className={classes.infoValue}>{movie.imdbVotes}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>Type:</span>
              <span className={classes.infoValue}>{movie.Type}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>DVD:</span>
              <span className={classes.infoValue}>{movie.DVD}</span>
            </div>

            <div className={classes.infoItem}>
              <span className={classes.infoKey}>Box Office:</span>
              <span className={classes.infoValue}>{movie.BoxOffice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieItem;
