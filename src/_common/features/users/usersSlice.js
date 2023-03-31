import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import UserService from 'modules/users/services/user.services';

export const getUsers = createAsyncThunk('users/getUsers', async (data, thunkApi) => {
  try {
    const response = await UserService.fetchAll();
    const result = await response.data.body;
    return result;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const remove = createAsyncThunk('users/removeOne', async (id) => {
  await UserService.remove(id);
});

export const updateUser = createAsyncThunk('users/updateOne', async (arg) => {
  const response = await UserService.put(arg.changes);
  return await response.data.body;
});

export const usersAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `user._id`
  selectId: (user) => user._id
  // Keep the "all IDs" array sorted based on user name
  // sortComparer: (a, b) => a.name.localeCompare(b.name)
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
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      const { _id, ...changes } = payload;
      usersAdapter.updateOne(state, { id: _id, changes });
    });
  }
});

export const { removeUser, addUser, setSearchTerm } = userSlice.actions;
export default userSlice.reducer;

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers
} = usersAdapter.getSelectors((state) => state.users);
