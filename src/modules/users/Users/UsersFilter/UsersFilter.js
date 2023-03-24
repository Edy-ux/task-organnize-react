import { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '_common/features/users/userSlice';
import useDebounce from '_common/hooks/useDebounce';
import { useUsersContext } from '../context/UsersContext';
import UsersFilterView from './UsersFilterView';

const UsersListFilter = memo(() => {
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  // const { setSearchTerm, searchTerm } = useUsersContext();

  const [search, setSearch] = useState('');

  //useDebounce async code
  const debouncedSearchTerm = useDebounce(search);

  const handleChangeSearch = (e) => setSearch(e.target.value.trim().toLowerCase());

  useEffect(() => {
    dispatch(setSearchTerm(debouncedSearchTerm));
  }, [debouncedSearchTerm, dispatch]);

  return <UsersFilterView {...{ handleChangeSearch, search, handleFocus, handleBlur, isFocused }} />;
});

export default UsersListFilter;
