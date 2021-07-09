import {configureStore, createAsyncThunk} from '@reduxjs/toolkit';
import counterReducer from './slice/sliceCounter';
import usersReducer from './slice/sliceUser';
import messageReducer from './slice/sliceMessage';
import persistedReducer from '../utils/configureStore'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    message:messageReducer,
    persister:persistedReducer,
  },
});


