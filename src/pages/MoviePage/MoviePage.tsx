import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../shared/hooks/redux';
import { useGetMovieByIdQuery } from '../../services/OMDbAPIService';
import MovieContainer from '../../components/MovieContainer/MovieContainer';

const MoviePage = () => {
  const params = useParams();
  const { apiKey } = useAppSelector((state) => state.userReducer);
  const { data, isFetching } = useGetMovieByIdQuery({ apiKey, movieId: params.id });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div>
      <MovieContainer movie={data} />
    </div>
  );
};

export default MoviePage;