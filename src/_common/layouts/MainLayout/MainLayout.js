import { memo } from "react";
import ProviderMain from "./context/MainLayoutContext";
import RootLayoutMainView from "./MainLayoutView";

const MainLayoutViewWrapper = memo(({ children }) => {
  return (
    <ProviderMain>
      <RootLayoutMainView>{children}</RootLayoutMainView>
    </ProviderMain>
  )
});
export default MainLayoutViewWrapper;