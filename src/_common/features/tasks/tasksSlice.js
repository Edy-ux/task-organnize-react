import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import taskService from '../../../modules/tasks/services/task-services';

export const getTasks = createAsyncThunk('tasks/getTasks', async (data, thunkApi) => {
  try {
    const response = await taskService.getAll();
    const result = await response.data.body;
    return result;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});


export const remove = createAsyncThunk('tasks/removeOne', async (id) => {
  await taskService.remove(id);
});

export const updateTask = createAsyncThunk('tasks/updateOne', async (arg) => {
  const response = await taskService.put(arg.changes);
  return await response.data.body;
});

export const tasksAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `user._id`
  selectId: (task) => task._id
  // Keep the "all IDs" array sorted based on user name
  // sortComparer: (a, b) => a.name.localeCompare(b.name)
});

const initialState = tasksAdapter.getInitialState({
  loading: false,
  error: null,
  searchTermTasks: ''
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    removeTask: tasksAdapter.removeOne,
    addTask: tasksAdapter.addOne,
    setSearchTermTask(state, { payload: filter }) {
      state.searchTermTask = filter;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getTasks.fulfilled, (state, action) => {
      tasksAdapter.upsertMany(state, action.payload);
      state.loading = false;
      state.error = false;
    });
    builder.addCase(getTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateTask.fulfilled, (state, { payload }) => {
      const { _id, ...changes } = payload;
      tasksAdapter.updateOne(state, { id: _id, changes });
    });
  }
});

export const { removeTask, addTask, setSearchTermTask } = tasksSlice.actions;
export default tasksSlice.reducer;

export const {
  selectById: selectTaskById,
  selectIds: selectTaskIds,
  selectEntities: selectTaskEntities,
  selectAll: selectAllTasks,
  selectTotal: selectTotalTasks
} = tasksAdapter.getSelectors((state) => state.tasks);
