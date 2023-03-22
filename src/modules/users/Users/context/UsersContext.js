import { useContext, createContext, memo, useState } from 'react';

const UsersListContext = createContext({});
UsersListContext.displayName = 'UsersListContext';

export const useUsersContext = () => {
  return useContext(UsersListContext);
};

export const useProviderUsers = () => {
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState('');
  const [userDialogState, setUserDialog] = useState({ open: false});
  const navigatorIsOnline = navigator.onLine;

  return {
    users,
    setUsers,
    search,
    setSearch,
    userDialogState,
    setUserDialog,
    navigatorIsOnline
  };
};


function ProviderUsersContext({ children }) {
  const context = useProviderUsers();
  return <UsersListContext.Provider value={context}>{children}</UsersListContext.Provider>;
}

export default memo(ProviderUsersContext);
