import React, { FC } from 'react';
import { IMovie } from '../../shared/models/IMovie';
import { AppLink } from '../AppLink/AppLink';
import classes from './MovieCard.module.scss';
import EmptyImage from '../EmptyImage/EmptyImage';

interface MovieCardProps extends IMovie {}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { Poster, Title, Type, Year, imdbID } = props;
  return (
    <AppLink to={`/movie/${imdbID}`} className={classes.movieLink}>
      <article className={classes.movieCard}>
        <div className={classes.posterContainer}>
          {Poster === 'N/A' ? <EmptyImage /> : <img src={Poster} alt={Title} />}
        </div>
        <h4>{Title}</h4>
        <div>
          <span>Year: </span>
          <span>{Year}</span>
        </div>
        <div>
          <span>Type: </span>
          <span>{Type}</span>
        </div>
      </article>
    </AppLink>
  );
};

export const MovieCardMemo = React.memo(MovieCard);

export default MovieCard;
