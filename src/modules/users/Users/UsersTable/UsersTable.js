import { useCallback, useEffect, useMemo, useState } from 'react';

import UsersTableView from './UsersTableView';

import UserService from '../../services/user.services';

import { useUsersContext } from '../context/UsersContext';

import useSnackbar from '_common/hooks/useSnackbar';
/* import useReducer from '_common/hooks/useReducer';*/
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, removeUser, selectTotalUsers, selectAllUsers } from '_common/features/users/userSlice';

const UsersTable = () => {
  const [usersFiltered, setUsersFiltered] = useState(null);
  const [userDelete, setUserDelete] = useState(null);
  const users = useSelector(selectAllUsers);
  const { loading, error, searchTerm } = useSelector((state) => state.users);
  console.log('renderizou',  users);
  const dispatch = useDispatch();
  const { navigatorIsOnline, setUserDialog } = useUsersContext();

  const handleOnOpenDialog = useCallback(() => setUserDialog(), [setUserDialog]);

  const { snackbar } = useSnackbar();

  // Set users if searchTerm is not a string empty. Otherwise set users with data from api

  useEffect(() => {
    if (searchTerm) {
      const result = users.filter((user) => user.name.toLowerCase().includes(searchTerm) || user.email.toLowerCase().includes(searchTerm));
      setUsersFiltered(result);
      return;
    }
    setUsersFiltered(users);
  }, [searchTerm, users]);

  const handleEdit = (user) => setUserDialog({ open: true, user });

  const handleDeleteConfirmation = async () => {
    try {
      UserService.remove(userDelete._id);
      dispatch(removeUser(userDelete._id));
      snackbar('Usuário deletado');
    } catch ({ response: { data } }) {
      snackbar(data.message);
    } finally {
      setUserDelete(null);
    }
  };

  const handleOnSelectUser = (user) => () => setUserDelete(user);
  const handleClose = () => setUserDelete(null);

  return (
    <UsersTableView
      users={usersFiltered}
      {...{
        loading,
        error,
        navigatorIsOnline,
        handleEdit,
        userDelete,
        handleOnSelectUser,
        handleDeleteConfirmation,
        handleClose
      }}
    />
  );
};

export default UsersTable;
