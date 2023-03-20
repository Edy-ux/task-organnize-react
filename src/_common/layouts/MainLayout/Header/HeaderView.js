import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './Headerstyle';
import { useContext } from 'react';
import { ColorModeContext } from 'theme/context/theme-context';

const HeaderView = ({ toogleSidebarIsOpen }) => {
  const classes = useStyles();

  const { colorMode, theme } = useContext(ColorModeContext);
  
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={toogleSidebarIsOpen}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Task Organize
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderView;
