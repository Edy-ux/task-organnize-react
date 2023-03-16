import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import MenuItem from './MenuItem';
import useStyles from './SideBarStyle';
import Collapse from '@material-ui/core/Collapse';
import { useMainContext } from '../context/useMainContext';
import { useMemo } from 'react';

const SideBarView = ({ sidebarIsOpen }) => {
  const { dropDownIsOpen, menu } = useMainContext();
  const menuList = useMemo(() => menu, []);
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: sidebarIsOpen,
          [classes.drawerClose]: !sidebarIsOpen
        })
      }}>
      <List>
        {menuList.map((item, index) => {
          const { items } = item;
          return (
            <>
              <MenuItem key={`item-${index}`} {...item} />
              {items && (
                <Collapse in={dropDownIsOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {items.map((subItem, index) => (
                      <MenuItem key={`subItem-${index}`} {...subItem} />
                    ))}
                  </List>
                </Collapse>
              )}
            </>
          );
        })}
      </List>
    </Drawer>
  );
};

export default SideBarView;
