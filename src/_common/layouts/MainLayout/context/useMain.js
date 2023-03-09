

import { useContext } from "react";
import { MaintContext } from "./MainLayoutContext";

// Hook for child components to get the auth object ...
// ... and re-render when it changes.

export const useMain = () => {
    return useContext(MaintContext);
};
