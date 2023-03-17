import { memo } from 'react';
import ProviderMain from './context/useMainContext';
import RootLayoutMainView from './MainLayoutView';


const MainLayoutWrapper = memo(({ children }) => {
  return (
    <ProviderMain>
      <RootLayoutMainView>{children}</RootLayoutMainView>
    </ProviderMain>
  );
});
export default MainLayoutWrapper;
