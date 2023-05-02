import ProviderMain from './context/useMainContext';
import RootLayoutMainView from './MainLayoutView';

const MainLayout = ({ children }) => {
  return (
    <>
      <ProviderMain>
        <RootLayoutMainView>{children}</RootLayoutMainView>
      </ProviderMain>
    </>
  );
};
export default MainLayout;
