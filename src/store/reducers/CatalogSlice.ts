import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICatalog {
  page: number;
  limit: number;
  searchTerm: string;
  count: number;
  sort: string;
  year: string;
  type: string;
}

const initialState: ICatalog = {
  count: 0,
  page: 1,
  limit: 10,
  searchTerm: 'star wars',
  sort: '',
  year: '',
  type: '',
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalog: (state, action: PayloadAction<ICatalog>) => ({ ...state, ...action.payload }),
  },
});

export const { setCatalog } = catalogSlice.actions;
export default catalogSlice.reducer;
