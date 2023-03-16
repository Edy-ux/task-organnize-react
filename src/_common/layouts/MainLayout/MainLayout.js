import { memo } from 'react';
import ProviderMain from './context/MainLayoutContext';
import MainRootLayoutView from './MainLayoutView';

const MainLayoutWrapper = memo(({ children }) => {
  return (
    <ProviderMain>
      <MainRootLayoutView>{children}</MainRootLayoutView>
    </ProviderMain>
  );
});
export default MainLayoutWrapper;
