import useStyles from './SearchStyle';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useMediaQuery } from '@material-ui/core';
import { useEffect } from 'react';

const SearchView = ({
  handleChangeSearch,
  isFocused,
  handleFocus,
  handleBlur,
  placeholder,
  areaLabel,
  stopSidebarExpand,
  sidebarIsOpen
}) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:500px)');
  console.log(matches);
  useEffect(() => {}, [matches, stopSidebarExpand, sidebarIsOpen]);
  return (
    <div className={classes.container}>
      {!matches && (
        <Paper component="div" className={`${classes.paper} ${isFocused ? classes.focused : ''}`}>
          <InputBase
            autoComplete="off"
            onChange={handleChangeSearch}
            className={`${classes.input}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            areaLabel={areaLabel}
            inputProps={{ 'aria-label': 'search users' }}
          />
          <div className={classes.wrapperIcons}>
            <Divider style={{ height: 28 }} orientation="vertical" />
            <IconButton type="button" aria-label="search">
              <SearchIcon className={classes.searchIcon} />
            </IconButton>
          </div>
        </Paper>
      )}
    </div>
  );
};

export default SearchView;
