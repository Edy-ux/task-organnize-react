import { useContext, createContext, memo, useState } from 'react';

const UsersListContext = createContext({});
UsersListContext.displayName = 'UsersListContext';

export const useUsersContext = () => {
  return useContext(UsersListContext);
};

export const useProviderUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userDialogState, setUserDialog] = useState({ open: false});
  const navigatorIsOnline = navigator.onLine;

  return {
    searchTerm,
    setSearchTerm,
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
