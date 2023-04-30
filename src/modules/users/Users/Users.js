import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalSelector, userDialogToggle } from '_common/features/modal/modalSlice';

import UsersView from './UsersView';

const Users = () => {
  const { userDialogIsOpen } = useSelector(modalSelector);
  const dispatch = useDispatch();

  const handleNewUser = () => dispatch(userDialogToggle());

  return <UsersView {...{ userDialogIsOpen, handleNewUser }} />;
};

export default Users;
