import {configureStore, createAsyncThunk} from '@reduxjs/toolkit';
import counterReducer from './slice/sliceCounter';
import usersReducer from './slice/sliceUser';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
