import {createAsyncThunk, createSlice,createEntityAdapter} from '@reduxjs/toolkit';
//import { RootState } from '../../utils/configureStore'

// const UserData = {
//   id: 0,
//   email: "",
//   first_name: "",
//   last_name: "",
//   avatar: "",
// }

////https://hybridheroes.de/blog/2021-01-08-redux-toolkit-react-native/
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://reqres.in/api/users');
  return (await response.json()).data
});

export const usersAdapter = createEntityAdapter();

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({
    loading: false
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      //state.users = action.payload;
      usersAdapter.setAll(state, action.payload);
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers
} = usersAdapter.getSelectors((state) => state.users);


export default usersSlice.reducer;
