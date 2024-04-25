import { useState } from 'react';
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer';
import { useAppSelector, useAppDispatch } from '../../shared/hooks/redux';
import { setCatalog } from '../../store/reducers/CatalogSlice';
import MoviesContolPanel from '../../components/MoviesContolPanel/MoviesContolPanel';

const MainPage = () => {
  const { isAuth } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const [searchState, setSearchState] = useState('');
  const catalogState = useAppSelector((state) => state.catalogReducer);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(e.target.value);
  };
  const handleSumbitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setCatalog({ ...catalogState, searchTerm: searchState, page: 1 }));
  };

  if (!isAuth) {
    return <div>Main Page</div>;
  }
  return (
    <div>
      <MoviesContolPanel onChange={handleSearch} onSubmit={handleSumbitSearch} />
      <MoviesContainer />
    </div>
  );
};

export default MainPage;
