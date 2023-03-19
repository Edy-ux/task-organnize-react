import { useEffect, useState } from 'react';
import UsersListTableView from './UsersListTableView';
import UserService from '../../services/user.services';
import { useUsersListContext } from '../context/useUsersListContext';

const UsersListTable = () => {
  const [filteredUsers, setFilteredUsers] = useState(null);

  const { setUsers, search, users, navigatorIsOnline} = useUsersListContext();

  console.log('render');

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

  return <UsersListTableView users={filteredUsers} {...{navigatorIsOnline}} />;
};

export default UsersListTable;
