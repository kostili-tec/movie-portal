import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducser from './reducers/UseSlice';
import { OMDbAPI } from "../services/OMDbAPIService";

const rootReducer = combineReducers({
  userReducser,
  [OMDbAPI.reducerPath]: OMDbAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(OMDbAPI.middleware);
    }
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']