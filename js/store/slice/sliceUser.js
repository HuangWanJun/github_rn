import {createAsyncThunk, createSlice,createEntityAdapter} from '@reduxjs/toolkit';
import { RootState } from '../newIndex'

const UserData = {
  id: 0,
  email: "",
  first_name: "",
  last_name: "",
  avatar: "",
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://reqres.in/api/users');
  return (await response.json()).data
});


const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
  }
});

export default usersSlice.reducer;
