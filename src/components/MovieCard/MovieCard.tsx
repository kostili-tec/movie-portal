import React, { FC } from 'react';
import { IMovie } from '../../shared/models/IMovie';

interface MovieCardProps extends IMovie {}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { Poster, Title, Type, Year } = props;
  return (
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
  );
};

export const MovieCardMemo = React.memo(MovieCard);

export default MovieCard;
