import { useEffect, useState } from 'react';
import UsersListTableView from './UsersListTableView';
import UserService from '../../services/user.services';
import { useUsersListContext } from '../context/useUsersListContext';

const UsersListTable = () => {
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [userId, setUserId] = useState(null);

  console.log(userId);
  
  const { setUsers, search, users, navigatorIsOnline } = useUsersListContext();

  const handleOnSelectUserId = (id) => console.log(id);

  /* Fetch All users from api */
  useEffect(() => {
    const getUsers = async () => {
      const {
        data: { body }
      } = await UserService.getAll();
      setUsers(body);
    };
    getUsers();
  }, [setUsers]);

  /* Set filteredUsers if state search is not a string empty. Otherwise set with users data from api */
  useEffect(() => {
    if (search) {
      const usersFiltered = users?.filter((user) => user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search));
      setFilteredUsers(usersFiltered);
      return;
    }
    setFilteredUsers(users);
  }, [search, users]);

  return <UsersListTableView users={filteredUsers} onSelectUserId={setUserId} {...{ navigatorIsOnline }} />;
};

export default UsersListTable;
