import { createSlice } from '@reduxjs/toolkit';

const initialState = () => ({
  userDialogIsOpen: false,
  sidebarIsOpen: false,
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
    setSidebarIsOpen: (state) => {
      state.sidebarIsOpen = !state.sidebarIsOpen
    },
  }
});

export const { userDialogToggle, sidebarToggle, setUserDialogState, confirmationDialogToggle, setSidebarIsOpen } = modalSlice.actions;
export default modalSlice.reducer;

export const modalSelector = (state) => state.modal;
