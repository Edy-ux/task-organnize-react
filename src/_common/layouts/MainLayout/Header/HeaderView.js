import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/MenuOpen';
import useStyles from './HeaderStyle';
import { Link, useHistory } from 'react-router-dom';
const HeaderView = ({ toggle }) => {
  const history = useHistory('');
  const classes = useStyles();
  const handleClick = () => history.push('/dashboard');
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={toggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title} onClick={handleClick}>
          Task Organize
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderView;
