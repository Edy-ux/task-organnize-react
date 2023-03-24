import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '_common/features/users/userSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from '_common/services/api';


export const store = configureStore({
  reducer: {
    users: usersReducer,
    [userApi.reducerPath]: userApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
  // middleware: [logger],
});

setupListeners(store.dispatch);
