import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../services/OMDbAPIService';
import MovieItem from '../../components/MovieItem/MovieItem';
import PageLoader from '../../widgets/PageLoader/PageLoader';
import { useAppSelector } from '../../shared/hooks/redux';

const MoviePage = () => {
  const { login } = useAppSelector((state) => state.userReducer);
  const params = useParams();
  const { data, isFetching } = useGetMovieByIdQuery({ movieId: params.id });

  if (isFetching) {
    return <PageLoader />;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div>
      <MovieItem movie={data} login={login} />
    </div>
  );
};

export default MoviePage;
