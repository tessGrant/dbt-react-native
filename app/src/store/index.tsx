import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reposReducer from './reducers';

export const store = configureStore({
  reducer: {
    repos: reposReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
