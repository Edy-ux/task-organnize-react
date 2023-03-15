

import { useContext } from "react";
import { MainContext } from "./MainLayoutContext";

// Hook for child components to get the auth object ...
// ... and re-render when it changes.

export const useMainContext = () => {
    return useContext(MainContext);
};
