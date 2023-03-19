import { memo, useEffect, useState } from 'react';
import useDebounce from '_common/hooks/useDebounce';
import { useUsersListContext } from '../context/useUsersListContext';
import UsersListFilterView from './UsersListFilterView';

const UsersListFilter = memo(() => {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };


  const { setSearch } = useUsersListContext();

  const [searchTerm, setSerachTerm] = useState('');

  //useDebounce async code
  const debouncedSearchTerm = useDebounce(searchTerm);

  const handleChangeSearchTerm = (e) => setSerachTerm(e.target.value.trim().toLowerCase());

  useEffect(() => {
    setSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearch]);

  return <UsersListFilterView {...{ handleChangeSearchTerm, searchTerm, handleFocus, handleBlur, isFocused}} />;
});

export default UsersListFilter;
