import { useTheme } from '@material-ui/core';
import useEscapeKey from '_common/hooks/useEscapeKey';
import { useMainContext } from '../context/useMainContext';
import HeaderView from './HeaderView';

const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keydown';

const Header = () => {  

  const theme = useTheme()


  
  console.log("theme", theme.palette.mode);
  
  const { sidebarIsOpen, setSidebarIsOpen } = useMainContext();

  const toogleSidebarIsOpen = _ => {
    setSidebarIsOpen((isOpen) => !isOpen)
  
  };
  const handleEscKey = useEscapeKey(toogleSidebarIsOpen, sidebarIsOpen)
  return (
    <>
      <HeaderView {...{ toogleSidebarIsOpen }} />;
    </>
  );
};

export default Header;
