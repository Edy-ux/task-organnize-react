
import useStyles from './UsersListFilterStyle';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const UsersListFilterView = ({ handleChangeSearchTerm }) => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Procure por nome ou email do usuário"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="search" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>

      {/*   <IconButton color="primary" className={classes.iconButton} aria-label="directions">
          <DirectionsIcon />
        </IconButton> */}
    </Paper>
  );
};

export default UsersListFilterView;
