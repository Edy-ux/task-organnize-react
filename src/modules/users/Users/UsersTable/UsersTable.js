import { useEffect, useState } from 'react';
import UsersTableView from './UsersTableView';
import { useDispatch, useSelector } from 'react-redux';

import UserService from '../../services/user.services';
import useSnackbar from '_common/hooks/useSnackbar';

import { removeUser, selectAllUsers } from '_common/features/users/usersSlice';
import { confirmationDialogToggle, modalSelector, setUserDialogState, userDialogToggle } from '_common/features/modal/modalSlice';

const UsersTable = () => {
  const [users, setUsers] = useState(null);
  const data = useSelector(selectAllUsers)
  const { loading, error, searchTerm } = useSelector((state) => state.users);
  const { userDialogState, confirmationDialogIsOpen } = useSelector(modalSelector);
  const dispatch = useDispatch();
  const { snackbar } = useSnackbar();
 
 console.log(users);
 
  // Set users if searchTerm is not a string empty. Otherwise set users with data from api
  useEffect(() => {
    if (searchTerm) {
      const result = data.filter((user) => user.name.toLowerCase().includes(searchTerm) || user.email.toLowerCase().includes(searchTerm));
      setUsers(result);
      return;
    }
    setUsers(data);
  }, [searchTerm, data]);

  const handleDeleteConfirmation = async () => {
    try {
      UserService.remove(userDialogState._id);
      dispatch(removeUser(userDialogState._id));
      snackbar('Usuário deletado');
    } catch (error) {
      snackbar(error);
    } finally {
      dispatch(confirmationDialogToggle());
      dispatch(setUserDialogState(null));
    }
  };
  const handleSelectUserDelete = (user) => {
    dispatch(confirmationDialogToggle());
    dispatch(setUserDialogState(user));
  };

  const handleCloseConfirmation = () => {
    dispatch(confirmationDialogToggle());
    dispatch(setUserDialogState(null));
  };

  const handleEdit = (user) => {
    dispatch(userDialogToggle());
    dispatch(setUserDialogState(user));
  };
 
  return (
    <UsersTableView
      users={users}
      {...{
        loading,
        error,
        confirmationDialogIsOpen,
        handleEdit,
        userDialogState,
        handleSelectUserDelete,
        handleDeleteConfirmation,
        handleCloseConfirmation
      }}
    />
  );
};

export default UsersTable;
