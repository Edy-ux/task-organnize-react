import { memo, useCallback, useEffect, useState } from 'react';
import useDebounce from '_common/hooks/useDebounce';
import { useUsersListContext } from '../context/useUsersListContext';
import UsersListFilterView from './UsersListFilterView';



const UsersListFilter = memo(() => {
  const { setSearch } = useUsersListContext();

  const [searchTerm, setSerachTerm] = useState('');

   //useDebounce async code
  const debouncedSearchTerm = useDebounce(searchTerm);

  const handleChangeSearchTerm = (event) => setSerachTerm(event.target.value.trim().toLocaleLowerCase())

  useEffect(() => {
    setSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearch]);

  return <UsersListFilterView {...{ handleChangeSearchTerm}} />;
});

export default UsersListFilter;
