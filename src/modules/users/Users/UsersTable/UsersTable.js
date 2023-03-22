import { useCallback, useEffect, useReducer, useState } from 'react';
import UsersTableView from './UsersTableView';
import UserService from '../../services/user.services';
import { useUsersContext } from '../context/UsersContext';
import useSnackbar from '_common/hooks/useSnackbar';

const UsersTable = () => {
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [confirmationDialogIsOpen, setConfirmationDialogIsOpen] = useState(false);
  const { setUsers, search, users, navigatorIsOnline, setUserDialog } = useUsersContext();
  const { snackbar, snackbarSuccess } = useSnackbar();
  const [userDelete, setUserDelete] = useReducer((prev, payload) =>users.find((user) => user._id === payload._id),[])
  

  console.log(userDelete);

  //Fetch All users from api
  useEffect(() => {
    const getUsers = async () => {
      const {
        data: { body }
      } = await UserService.getAll();
      setUsers(body);
    };
    getUsers();
  }, [setUsers]);

  // Set filteredUsers if state search is not a string empty. Otherwise set with users data from api

  useEffect(() => {
    if (search) {
      const usersFiltered = users?.filter((user) => user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search));
      setFilteredUsers(usersFiltered);
      return;
    }
    setFilteredUsers(users);
  }, [search, users]);

  const handleEdit = useCallback((user) => setUserDialog({ open: true, user }), [setUserDialog]);

  const handleDeleteConfirmation = async () => {
    console.log('deleted');
    try {
      await UserService.remove(userDelete._id);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userDelete._id));
      snackbar("Usuário deletado")
    } catch ({ response: { data } }) {
      snackbar(data.message);
    } finally {
      setUserDelete([]);
    }
  };

  const handleOnSelectUserId = useCallback(
    (id) => {
      return () => setUserDelete(id);
    },
    [setUserDelete]
  );

  const handleClose = () => setUserDelete([]);

  return (
    <UsersTableView
      users={filteredUsers}
      {...{
        navigatorIsOnline,
        handleEdit,
        setUserDelete,
        handleOnSelectUserId,
        confirmationDialogIsOpen,
        userDelete,
        handleDeleteConfirmation,
        handleClose
      }}
    />
  );
};

export default UsersTable;
