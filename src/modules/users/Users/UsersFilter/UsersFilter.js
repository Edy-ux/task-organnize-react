import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '_common/features/users/usersSlice';
import useDebounce from '_common/hooks/useDebounce';
import UsersFilterView from './UsersFilterView';

const UsersListFilter = memo(() => {
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  const [search, setSearch] = useState('');

  const handleChangeSearch = (e) => setSearch(e.target.value.trim().toLowerCase());

  //useDebounce async code
  const debouncedSearchTerm = useDebounce(search);

  useEffect(() => {
    if (dispatch) {
      dispatch(setSearchTerm(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm, dispatch]);

  return <UsersFilterView {...{ handleChangeSearch, search, handleFocus, handleBlur, isFocused }} />;
});

export default UsersListFilter;
