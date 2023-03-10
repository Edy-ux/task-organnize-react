import { memo } from "react";
import ProvideMain from "./context/MainLayoutContext";
import MainLayoutView from "./MainLayoutView";

const MainLayoutViewWrapper = memo(({ children }) => {
  return (
    <ProvideMain>
      <MainLayoutView>{children}</MainLayoutView>
    </ProvideMain>
  )

});
export default MainLayoutViewWrapper;