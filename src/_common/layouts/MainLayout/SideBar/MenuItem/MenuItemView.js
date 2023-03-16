import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMainContext } from '../../context/useMainContext';
import useStyles from './MenuItemStyle';

const MenuItemView = ({ text, icon, path, items, handleClick, dropDownIsOpen }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const {sidebarIsOpen}=  useMainContext()

  return (
    <>
      <ListItem
        key={text}
        button
        component={path ? Link : 'li'}
        to={path}
        title={!sidebarIsOpen ? text : ''}
        onClick={items ? handleClick : null}
        selected={pathname === path}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {items && (dropDownIsOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {/*    {items && (
        <Collapse in={droDdown} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {items.map((subItem, index) => (
              <MenuItem key={`subItem-${index}`} item={subItem} />
            ))}
          </List>
        </Collapse>
      )} */}
    </>
  );
};

export default MenuItemView;
