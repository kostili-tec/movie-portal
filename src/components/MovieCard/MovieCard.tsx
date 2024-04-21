import React, { FC } from 'react';
import { IMovie } from '../../shared/models/IMovie';

interface MovieCardProps extends IMovie {}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { Poster, Title, Type, Year, imdbID } = props;
  return (
    <article>
      <img src={Poster} alt={Title} />
      <a href={imdbID}>
        <h4>{Title}</h4>
      </a>
      <h6>{Year}</h6>
      <h6>{Type}</h6>
    </article>
  );
};

export const MovieCardMemo = React.memo(MovieCard);

export default MovieCard;
