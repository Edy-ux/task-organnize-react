

import UsersView from './UsersView';
import { useUsersContext } from './context/UsersContext'

const Users = () => {

  const { setUserDialog, userDialogState} = useUsersContext();
   
  const handleOpenUserDialog = () => setUserDialog({ open: true });

  return <UsersView {...{ userDialogState, handleOpenUserDialog}} />;
};

export default Users;

