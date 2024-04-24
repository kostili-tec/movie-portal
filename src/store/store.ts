import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducser from './reducers/UserSlice';
import catalogReducer from './reducers/CatalogSlice';
import { OMDbAPI } from '../services/OMDbAPIService';

const rootReducer = combineReducers({
  userReducser,
  catalogReducer,
  [OMDbAPI.reducerPath]: OMDbAPI.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(OMDbAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
