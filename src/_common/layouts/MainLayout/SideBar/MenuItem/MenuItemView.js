import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { LinkTwoTone } from "@material-ui/icons";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { memo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const MenuItemView = memo(({ item, isOpen, handleClick }) => {
  const { pathname } = useLocation();

  const { text, icon, path, items } = item;

  return (
    <>
      <ListItem
        key={text}
        button
        component={path ? Link : "li"}
        to={path}
        onClick={items ? handleClick : null}
        selected={pathname === path}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {items && (isOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {items && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {items.map((subItem, index) => (
              <MenuItem key={`subItem-${index}`} item={subItem} />
            ))}
          </List>
        </Collapse>
      )}
      {/* {items && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          {items.map((item, index) => {
      
            return (  
              <ListItem
                to={item.path}
                key={text}
                button
                component={Link}
                selected={pathname === item.path}>
                <ListItemText primary={item.text} />
              </ListItem>
            )
          })}
        </Collapse>
      )} */}
    </>
  );
})


export default MenuItemView