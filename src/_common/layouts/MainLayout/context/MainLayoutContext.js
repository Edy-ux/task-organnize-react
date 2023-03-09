import { createContext } from "react";
import useProvideMain from "./useProvideContext";

export const MaintContext = createContext(null)

function ProviderMain({ children }) {
    const main = useProvideMain()

    return (
        <>
            <MaintContext.Provider value={main}>
                {children}
            </MaintContext.Provider>;
        </>
    )
}

export default ProviderMain


