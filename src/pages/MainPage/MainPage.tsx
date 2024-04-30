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
  const [showFilters, setShowFilters] = useState(false);

  const handleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSumbitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const { search, type, year } = searchFormState;
    if (showFilters) {
      dispatch(setCatalog({ ...catalogState, searchTerm: search, type, year, page: 1 }));
    } else {
      setSearchFormState((prevState) => ({ ...prevState, type: '', year: '' }));
      dispatch(setCatalog({ ...catalogState, searchTerm: search, type: '', year: '', page: 1 }));
    }
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
        showFilters={showFilters}
        onShowFilters={handleShowFilters}
      />
      <MoviesContainer />
    </div>
  );
};

export default MainPage;
