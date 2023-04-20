import { useCallback } from 'react';
import { useMainContext } from '../../context/useMainContext';
import MenuItemView from './MenuItemView';

const MenuItem = ({ text, icon, path, items }) => {
  const { setDropDownIsOpen, dropDownIsOpen } = useMainContext();

  const handleClick = useCallback(() => {
    setDropDownIsOpen((isOpen) => !isOpen);
  }, [setDropDownIsOpen]);

  return (
    <>
      <MenuItemView {...{ text, icon, path, handleClick, dropDownIsOpen, items }} />
    </>
  );
};

export default MenuItem;
