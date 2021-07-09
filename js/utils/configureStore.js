//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import {createStore,combineReducers} from 'redux'
import {configureStore, createAsyncThunk} from '@reduxjs/toolkit';
import counterReducer from '../store/slice/sliceCounter';
import usersReducer from '../store/slice/sliceUser';
import messageReducer from '../store/slice/sliceMessage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  message:messageReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk],
// })

//export type RootState = ReturnType<typeof store.getState>;

export default () => {
  //let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}


