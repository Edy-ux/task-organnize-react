import { useMemo, useCallback, useState } from 'react';
import { useMainContext } from '../../context/useMainContext';
import MenuItemView from './MenuItemView';

const MenuItem = ({ text, icon, path, items }) => {
  const { setDropDownIsOpen, dropDownIsOpen } = useMainContext();
  const handleClick = (_) => setDropDownIsOpen((isOpen) => !isOpen);
  return (
    <>
      <MenuItemView {...{ text, icon, path, handleClick, dropDownIsOpen, items }} />
    </>
  );
};

export default MenuItem;
