import ProviderMain from './context/useMainContext';
import RootLayoutMainView from './MainLayoutView';

const MainLayoutWrapper = ({ children }) => {
  return (
    <>
      <ProviderMain>
        <RootLayoutMainView>{children}</RootLayoutMainView>
      </ProviderMain>
    </>
  );
};
export default MainLayoutWrapper;
