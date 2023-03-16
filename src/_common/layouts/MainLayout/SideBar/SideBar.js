
import { useMainContext } from '../context/useMainContext';
import SideBarView from './SideBarView';

const SideBar = () => {
 
  const {sidebarIsOpen} = useMainContext()
  return <SideBarView  {...{sidebarIsOpen}}/>;
};

export default SideBar;
