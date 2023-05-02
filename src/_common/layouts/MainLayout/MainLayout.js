import LazyLoading from '_common/components/LazyLoading/LazyLoading';
import ProviderMain from './context/useMainContext';
import RootLayoutMainView from './MainLayoutView';
import { Switch, Route, useHistory } from 'react-router-dom';
import RegisterRoutes from '_common/pages/Register/register.routes';

const MainLayout = ({ children }) => {
  const history = useHistory('');
  return (
    <>
      <ProviderMain>
        <RootLayoutMainView>{children}</RootLayoutMainView>
      </ProviderMain>
    </>
  );
};
export default MainLayout;
