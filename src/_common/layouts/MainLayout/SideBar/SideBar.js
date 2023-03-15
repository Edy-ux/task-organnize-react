
import { useMainContext } from '../context/useMain';
import SideBarView from './SideBarView';

const SideBar = () => {
 
  const {sidebarIsOpen} = useMainContext()
  return <SideBarView  {...{sidebarIsOpen}}/>;
};

export default SideBar;
