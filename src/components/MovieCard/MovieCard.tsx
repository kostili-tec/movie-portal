import React, { FC } from 'react';
import { IMovie } from '../../shared/models/IMovie';
import { AppLink } from '../AppLink/AppLink';
import classes from './MovieCard.module.scss';

interface MovieCardProps extends IMovie {}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { Poster, Title, Type, Year, imdbID } = props;
  return (
    <AppLink to={`/movie/${imdbID}`} className={classes.movieLink}>
      <article>
        <img src={Poster} alt={Title} />
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
