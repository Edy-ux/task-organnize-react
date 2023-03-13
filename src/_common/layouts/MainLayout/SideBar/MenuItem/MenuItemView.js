import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuItemView = memo(({ text, icon, path, items, handleClick, dropDownIsOpen }) => {
  const { pathname } = useLocation();
 
  return (
    <>
      <ListItem
        key={text}
        button
        component={Link}
        to={path ?? "tarefas"}
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
});

export default MenuItemView;
