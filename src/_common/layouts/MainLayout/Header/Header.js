import { useTheme } from '@material-ui/core';
import useEscapeKey from '_common/hooks/useEscapeKey';
import { useMainContext } from '../context/useMainContext';
import HeaderView from './HeaderView';

const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keydown';

const Header = () => {
  const theme = useTheme();

  const { sidebarIsOpen, setSidebarIsOpen } = useMainContext();

  const toggleSidebarIsOpen = (_) => {
    setSidebarIsOpen((isOpen) => !isOpen);
  };
  const handleEscKey = useEscapeKey(toggleSidebarIsOpen, sidebarIsOpen);
  return (
    <>
      <HeaderView {...{ toggleSidebarIsOpen }} />
    </>
  );
};

export default Header;
