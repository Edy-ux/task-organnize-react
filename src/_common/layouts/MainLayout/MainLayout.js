
import { makeStyles } from '@material-ui/core';
import Snackbar from '_common/components/Snackbar';
import { useMainContext } from './context/useMainContext';
import ProviderMain from './context/useMainContext';
import Header from './Header';
import RootLayoutMainView from './MainLayoutView';
import SideBar from './SideBar';



const MainLayoutWrapper = ({ children }) => {

  return (
    <>
      <ProviderMain>
        <RootLayoutMainView>{children}</RootLayoutMainView>
      </ProviderMain>
    </>
  )


};
export default MainLayoutWrapper;
