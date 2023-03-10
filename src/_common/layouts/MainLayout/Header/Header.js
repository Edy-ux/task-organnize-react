import { useMain } from '../context/useMain';
import HeaderView from './HeaderView';

const Header = () => {
  const { setSidebarIsOpen } = useMain()
  
  const toogleSidebarIsOpen = _ => setSidebarIsOpen(isOpen => !isOpen)
  return <HeaderView {...{ toogleSidebarIsOpen }} />;
};

export default Header;
