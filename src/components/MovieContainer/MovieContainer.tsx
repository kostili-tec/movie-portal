import React, { FC } from 'react';
import { IMovieDetails } from '../../shared/models/IMovieDetails';
import { classNames } from '../../shared/lib/classNames';
import classes from './MovieContainer.module.scss';

interface MovieContainerProps {
  movie: IMovieDetails;
}

const MovieContainer: FC<MovieContainerProps> = ({ movie }) => (
  <div className={classNames('', {}, [classes.movieContainer])}>
    <h2>
      {movie.Title} ({movie.Year})
    </h2>
    <div>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
    <p>
      <strong>Rated:</strong> {movie.Rated}
    </p>
    <p>
      <strong>Released:</strong> {movie.Released}
    </p>
    <p>
      <strong>Runtime:</strong> {movie.Runtime}
    </p>
    <p>
      <strong>Genre:</strong> {movie.Genre}
    </p>
    <p>
      <strong>Director:</strong> {movie.Director}
    </p>
    <p>
      <strong>Writer:</strong> {movie.Writer}
    </p>
    <p>
      <strong>Actors:</strong> {movie.Actors}
    </p>
    <p>
      <strong>Plot:</strong> {movie.Plot}
    </p>
    <p>
      <strong>Language:</strong> {movie.Language}
    </p>
    <p>
      <strong>Country:</strong> {movie.Country}
    </p>
    <p>
      <strong>Awards:</strong> {movie.Awards}
    </p>

    <p>
      <strong>Ratings:</strong>
    </p>
    <ul>
      {movie.Ratings.map((rating) => (
        <li key={rating.Value}>
          <strong>{rating.Source}:</strong> {rating.Value}
        </li>
      ))}
    </ul>
    <p>
      <strong>Metascore:</strong> {movie.Metascore}
    </p>
    <p>
      <strong>imdbRating:</strong> {movie.imdbRating}
    </p>
    <p>
      <strong>imdbVotes:</strong> {movie.imdbVotes}
    </p>
    <p>
      <strong>imdbID:</strong> {movie.imdbID}
    </p>
    <p>
      <strong>Type:</strong> {movie.Type}
    </p>
    <p>
      <strong>DVD:</strong> {movie.DVD}
    </p>
    <p>
      <strong>BoxOffice:</strong> {movie.BoxOffice}
    </p>
    <p>
      <strong>Production:</strong> {movie.Production}
    </p>
    <p>
      <strong>Website:</strong> {movie.Website}
    </p>
  </div>
);

export default MovieContainer;