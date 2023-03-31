import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '_common/features/users/usersSlice';
import tasksReducer from '_common/features/tasks/tasksSlice';

import modalSlice from '_common/features/modal/modalSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from '_common/services/api';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    modal: modalSlice,
    tasks: tasksReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);
