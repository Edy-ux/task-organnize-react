import { useCallback, useEffect, useRef } from 'react';
import useEscapeKey from '_common/hooks/useEscapeKey';
import { useMain } from '../context/useMain';
import HeaderView from './HeaderView';
import { Redirect, useHistory, useLocation, useRouteMatch,} from 'react-router-dom';

const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keydown';

const Header = () => {  
  const { sidebarIsOpen, setSidebarIsOpen, setDropDownIsOpen } = useMain();

  const toogleSidebarIsOpen = _ => {
    setSidebarIsOpen((isOpen) => !isOpen)
    setDropDownIsOpen(false);
  };

  const handleEscKey = useEscapeKey(toogleSidebarIsOpen, sidebarIsOpen)
  return (
    <>
      <HeaderView {...{ toogleSidebarIsOpen }} />;
    </>
  );
};

export default Header;
