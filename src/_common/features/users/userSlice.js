import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

import UserService, { userAPI } from 'modules/users/services/user.services';

export const getUsers = createAsyncThunk('users/getUsers', async (data, thunkApi) => {
  try {
    const response = await UserService.fetchAll();
    const result = await response.data.body;
    return result;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const remove = createAsyncThunk('users/remove', async (id) => {
  await UserService.remove(id);
});
export const usersAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `user._id`
  selectId: (user) => user._id,
  // Keep the "all IDs" array sorted based on user name
  sortComparer: (a, b) => a.name.localeCompare(b.name)
});

const initialState = usersAdapter.getInitialState({
  loading: false,
  error: null,
  searchTerm: ''
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    removeUser: usersAdapter.removeOne,
    addUser: usersAdapter.addOne,
    updateUser: usersAdapter.updateOne,
    setSearchTerm(state, { payload: filter }) {
      state.searchTerm = filter;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      usersAdapter.upsertMany(state, action.payload);
      state.loading = false;
      state.error = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const { removeUser, addUser, setSearchTerm, updateUser } = userSlice.actions;
export default userSlice.reducer;

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers
} = usersAdapter.getSelectors((state) => state.users);
