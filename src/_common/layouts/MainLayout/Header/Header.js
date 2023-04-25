import { useCallback, useEffect } from 'react';
import { useMainContext } from '../context/useMainContext';
import HeaderView from './HeaderView';
const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keydown';

const Header = () => {
  const { sidebarIsOpen, setSidebarIsOpen } = useMainContext();
  /* . To prevent an infinite loop, useCallback hook caches our handleEscKey function so that it doesn’t 
  continually become a new function at each render. */
  const handleEscKey = useCallback(
    (event) => {
      if (event.key === KEY_NAME_ESC && sidebarIsOpen) {
        setSidebarIsOpen((isOpen) => !isOpen);
      }
    },
    [setSidebarIsOpen, sidebarIsOpen]
  );

  const toggle = () => setSidebarIsOpen((isOpen) => !isOpen);

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey);
    return () => document.removeEventListener(KEY_EVENT_TYPE, handleEscKey);
  }, [handleEscKey]);

  return (
    <>
      <HeaderView {...{ toggle }} />
    </>
  );
};

export default Header;
