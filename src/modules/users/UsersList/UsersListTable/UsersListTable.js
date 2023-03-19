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

<<<<<<< HEAD
  /* Set filteredUsers if state search is not a string empty. Otherwise set with users data from api */

=======
  /* Set filteredUsers if search is not a string empty. Otherwise set users with data from api */
>>>>>>> 5778b21e3a2bc5950b45a5eb414da8b9eae07f7b
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
