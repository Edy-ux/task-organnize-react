import SearchView from './SearchView';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm as setSearchTermUser} from '_common/features/users/usersSlice';
import { setSearchTermTask} from '_common/features/tasks/tasksSlice';



import useDebounce from '_common/hooks/useDebounce';

const Search = ({placeholder, areaLabel, module}) => {
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
      module === "user" ? 
      dispatch(setSearchTermUser(debouncedSearchTerm)): 
      dispatch(setSearchTermTask(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm, dispatch]);

  return <SearchView {...{ handleChangeSearch, search, handleFocus, handleBlur, isFocused, placeholder, areaLabel}} />;
}

export default Search;
