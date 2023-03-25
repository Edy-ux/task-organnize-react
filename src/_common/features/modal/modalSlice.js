import { createSlice } from '@reduxjs/toolkit';

const initialState = () => ({
  userDialogIsOpen: false,
  userDialogState: null,
  confirmationDialogIsOpen: false,
});

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    userDialogToggle: (state) => void (state.userDialogIsOpen = !state.userDialogIsOpen),
    setUserDialogState: (state, { payload }) => {
      state.userDialogState = payload
    },
    confirmationDialogToggle: (state) => {
      state.confirmationDialogIsOpen = !state.confirmationDialogIsOpen
    },
  }
});

export const { userDialogToggle, sidebarToggle, setUserDialogState, confirmationDialogToggle} = modalSlice.actions;
export default modalSlice.reducer;

export const modalSelector = (state) => state.modal;
