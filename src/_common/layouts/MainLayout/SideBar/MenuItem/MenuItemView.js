import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMainContext } from '../../context/useMain';
import useStyles from './MenuItemStyle';

const MenuItemView = ({ text, icon, path, items, handleClick, dropDownIsOpen }) => {

  const classes = useStyles();
  const { pathname } = useLocation();
  const { sidebarIsOpen } = useMainContext()

  return (
      <ListItem
        key={text}
        button
        component={path ? Link : 'li'}
        to={path}
        title={!sidebarIsOpen ? text : ''}
        onClick={items ? handleClick : null}
        selected={pathname === path}
      >
        {path   ?
          (<>
            <ListItemIcon>{icon}</ListItemIcon> <ListItemText primary={text} />
          </>)
          :
          <>
            <Link to="/tarefas" className={classes.linkStyle}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </Link>
            {(items && (dropDownIsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />))}
          </>
        }
      </ListItem>
   
  );
};

export default MenuItemView;
