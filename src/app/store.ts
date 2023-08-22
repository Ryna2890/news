import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {apiSlice} from "../features/news/news.api.slice";
import pageSettingsReducer from "../features/pageSettings/pageSettings";

export const store = configureStore({
  reducer: {
    pageSettings: pageSettingsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
