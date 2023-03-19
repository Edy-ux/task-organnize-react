import { useContext, createContext, memo, useState } from 'react';

const UsersListContext = createContext({});
UsersListContext.displayName = 'UsersListContext';

export const useUsersListContext = () => {
  return useContext(UsersListContext);
};


export const useProviderUsersList = () => {
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState('');
  const [userDialog, setUserDialog] = useState({ open: false });
  const navigatorIsOnline = navigator.onLine


  return {
    users,
    setUsers,
    search,
    setSearch,
    userDialog,
    setUserDialog,
    navigatorIsOnline
  };
};

function ProviderUsersList({ children }) {
  const context = useProviderUsersList();

  return <UsersListContext.Provider value={context}>{children}</UsersListContext.Provider>;
}

export default memo(ProviderUsersList);
