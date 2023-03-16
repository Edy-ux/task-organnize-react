
  return (
    <UsersListContext.Provider value={{ users, setUsers, filter, setFilter, userDialog, setUserDialog }}>
      {children}
    </UsersListContext.Provider>
  );
});