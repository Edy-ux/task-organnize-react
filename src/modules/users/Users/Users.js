import { useDispatch, useSelector } from 'react-redux';
import { modalSelector, userDialogToggle } from '_common/features/modal/modalSlice';
import { getUsers } from '_common/features/users/usersSlice';

import UsersView from './UsersView';
import { useEffect } from 'react';

const Users = () => {
  const { userDialogIsOpen } = useSelector(modalSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleNewUser = () => dispatch(userDialogToggle());

  return <UsersView {...{ userDialogIsOpen, handleNewUser }} />;
};

export default Users;
