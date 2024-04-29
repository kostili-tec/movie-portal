import { useState } from 'react';
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer';
import { useAppSelector, useAppDispatch } from '../../shared/hooks/redux';
import { setCatalog } from '../../store/reducers/CatalogSlice';
import MoviesContolPanel from '../../components/MoviesContolPanel/MoviesContolPanel';

interface SearchState {
  search: string;
  year: string;
  type: string;
}

const MainPage = () => {
  const dispatch = useAppDispatch();
  const catalogState = useAppSelector((state) => state.catalogReducer);
  const [searchFormState, setSearchFormState] = useState<SearchState>({
    search: '',
    year: '',
    type: '',
  });

  const handleSumbitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const { search, type, year } = searchFormState;
    dispatch(setCatalog({ ...catalogState, type, year, searchTerm: search, page: 1 }));
  };

  const handleSearchFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchFormState((prevState) => ({
      ...prevState,
      type: e.target.value,
    }));
  };

  return (
    <div>
      <MoviesContolPanel
        onChangeInput={handleSearchFormChange}
        onChangeSelect={handleChangeType}
        onSubmit={handleSumbitSearch}
      />
      <MoviesContainer />
    </div>
  );
};

export default MainPage;
