import UsersListView from './UsersListView';
import { useUsersListContext } from './context/useUsersListContext';

const UsersList = () => {
  const { setUserDialog, userDialog, users} = useUsersListContext();
  console.log(users);

  
  
   
  const handleOpenUserDialog = () => setUserDialog({ open: true });
  return <UsersListView {...{ userDialog, handleOpenUserDialog}} />;
};

export default UsersList;

