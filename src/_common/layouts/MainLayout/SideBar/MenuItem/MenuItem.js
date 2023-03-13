import { useMemo, useCallback, useState } from 'react';
import { useMain } from '../../context/useMain';
import MenuItemView from './MenuItemView';

const MenuItem = ({ text, icon, path, items }) => {
  const   {setDropDownIsOpen}  = useMain();
  const _items = useMemo(()=> items, [])
  const handleClick = useCallback(() => setDropDownIsOpen((isOpen) => !isOpen), [setDropDownIsOpen]);
  return <MenuItemView {...{ text, icon, path, handleClick }} items={_items} />;
};

export default MenuItem;
