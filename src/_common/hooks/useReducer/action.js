import { UserActionTypes } from './action-types';

export const editUser = (payload) => ({
  type: UserActionTypes.EDIT_USER,
  payload
});

export const deleteUser = (payload) => ({
  type: UserActionTypes.DELETE_USER,
  payload
});

export const filterUsers = (payload) => ({
  type: UserActionTypes.FILTER_USERS,
  payload
});

export const resetState = (payload) => ({
    type: UserActionTypes.RESET,
    payload
});
  