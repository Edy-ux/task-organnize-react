import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMainContext } from '../../context/useMainContext';
import useStyles from './MenuItemStyle';

const MenuItemView = memo(({ text, icon, path, items, handleClick, dropDownIsOpen }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { sidebarIsOpen } = useMainContext();

  const componentLink = path ? Link : 'li'

  return (
    <ListItem
      key={text}
      button
      component={componentLink}
      to={path}
      title={!sidebarIsOpen ? text : ''}
      onClick={items ? handleClick : null}
      selected={pathname === path}>
      {path ? (
        <>
          <ListItemIcon>{icon}</ListItemIcon> <ListItemText primary={text} />
        </>
      ) : (
        <>
          <Link to="/tarefas" className={classes.linkStyle}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </Link>
          {items && (dropDownIsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
        </>
      )}
    </ListItem>
  );
});

export default MenuItemView;
