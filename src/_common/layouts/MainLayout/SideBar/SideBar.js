
import { useMain } from '../context/useMain';
import SideBarView from './SideBarView';

const SideBar = () => {
 
  const {sidebarIsOpen} = useMain()
  return <SideBarView  {...{sidebarIsOpen}}/>;
};

export default SideBar;
